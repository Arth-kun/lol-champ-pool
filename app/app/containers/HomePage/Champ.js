import React from 'react';
import { Link } from 'react-router';

import ChampDescription from './ChampDescription';

const Champ = ({ champ }) => {

    const getChampDescriptions = (descriptions) => {
        if (descriptions && descriptions.length !== 0) {
            return descriptions.map((desc, i) => {
                return (
                    <ChampDescription key={i} description={desc} />
                );
            });
        }
    }

    return (
        <Link to={`${name}/${champ.name}`} className="list-group-item" style={{ paddingBottom:'0px' }}>
            <h4 className="list-group-item-heading">{ champ.name }</h4>
            { getChampDescriptions(champ.descriptions) }
        </Link>
    );
}

export default Champ;
