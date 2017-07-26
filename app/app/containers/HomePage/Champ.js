import React from 'react';
import { Link } from 'react-router';

import ChampDescription from './ChampDescription';

const Champ = ({ champ, lane }) => {

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
        <div className="list-group-item">
            <h4 className="list-group-item-heading" data-toggle="collapse" data-target={`#${champ.name + lane}Content`}>{ champ.name }</h4>
            <div id={`${champ.name + lane}Content`}  className="list-group-item-text collapse">
                { getChampDescriptions(champ.descriptions) }
            </div>
        </div>
    );
}

export default Champ;
