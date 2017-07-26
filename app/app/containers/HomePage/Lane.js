import React from 'react';
import { Link } from 'react-router';

const Lane = ({ name, champList }) => {

    const getChampDescriptionsList = (descriptions) => {
        if (descriptions && descriptions.length !== 0) {
            return descriptions.map((desc, i) => {
                return (
                    <div key={ i } className="list-group-item row">
                        <div className="col-sm-3">{ desc.name }</div>
                        <div className="col-sm-9">{ desc.content }</div>
                    </div>
                );
            });
        }
    }

    const getChampList = () => {
        if (champList.length !== 0) {
            return champList.map((champ, i) => {
                return (
                    <Link to={`1/${name}/${champ.name}`} key={ i } className="list-group-item" style={{ paddingBottom:'0px' }}>
                        <h4 className="list-group-item-heading">{ champ.name }</h4>
                        { getChampDescriptionsList(champ.descriptions) }
                    </Link>
                );
            });
        }
    }

    return (
        <div className="panel panel-primary">
            <div className="panel-heading" data-toggle="collapse" data-target={`#${name}Content`}>{ name }</div>
            <div id={`${name}Content`} className="list-group collapse">
                <Link to={`add/${name}`} className="btn btn-success btn-md btn-block">Add a champion</Link>
                { getChampList() }
            </div>
        </div>
    );
};

export default Lane;
