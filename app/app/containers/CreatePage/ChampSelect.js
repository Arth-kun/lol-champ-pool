import React from 'react';
import * as axios from 'axios';

import Img from './Img';

class ChampSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lolChampList: {},
            value: 1,
            champSelected: {},
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getChampById = this.getChampById.bind(this);

        this.apiKey ='RGAPI-842d3799-847b-4650-9b01-7b258e008635';
    }

    componentWillMount() {
        const lolChampApiUrl = 'https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=true&api_key='+this.apiKey;

        axios.get(lolChampApiUrl)
        .then((response) => {
            this.setState({
                lolChampList: response.data.data
            });
          })
          .catch((error) => {
            console.log(error);
          });

          this.getChampById(this.state.value);
    }

    handleChange(event) {
        this.getChampById(event.target.value);
        this.setState({
            value: event.target.value
        });
    }

    getChampById(champId) {
        const lolChampByIdApiUrl = `https://euw1.api.riotgames.com/lol/static-data/v3/champions/${champId}?locale=en_US&tags=image&api_key=${this.apiKey}`;

        axios.get(lolChampByIdApiUrl)
        .then((response) => {
            console.log(response);
            this.setState({
                champSelected: response.data
            });
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {

        const imageChampUrl = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';

        const champList = this.state.lolChampList;
        const champSelected = this.state.champSelected;

        const title = champSelected ? champSelected.title : '';
        const image = champSelected.image ? champSelected.image.full : '';

        let selectItem = [];
        let i = 0;

        for(const champ in champList) {
            selectItem[i] = <option key={ i } value={champList[champ].id}>{champList[champ].name}</option>;
            i++;
        }

        return (
            <span>
                { image ? <Img src={imageChampUrl + image} alt="Champ selected image sprite" /> : '' }
                <br />
                <select className="form-control" id="select" onChange={this.handleChange}>
                    { selectItem }
                </select>
                <span className="help-block">{ title ? title.charAt(0).toUpperCase() + title.slice(1) : '' }</span>
            </span>
        );
    }

}

export default ChampSelect;
