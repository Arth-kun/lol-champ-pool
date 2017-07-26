/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import ChampAddForm from './ChampAddForm';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

    ComponentWillMount() {
        const lolChampApi = 'https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=RGAPI-abaf50d1-ed04-4742-b922-b27ee8494bd0'
        //fetch:
    }

    render() {
        return (
          <div>
            <Helmet
              title="Create Page"
              meta={[
                { name: 'description', content: 'Creation Page of champion pool manager' },
              ]}
            />
            <br />
            <ChampAddForm role={ this.props.routeParams.id } />
            <br />
          </div>
        );
    }
}
