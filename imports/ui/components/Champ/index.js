import React from 'react';
import { Link } from 'react-router';

import ChampDescription from '../ChampDescription/index';

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
            <div className="list-group-item-heading row" data-toggle="collapse" data-target={`#${champ.name + lane}Content`}>
                <div className="col-md-3">
                    { champ.name }
                </div>
                <div className="col-md-3 col-md-offset-6 btn-group">
                    <Link className="btn btn-warning">Edit</Link>
                    <Link className="btn btn-danger">Delete</Link>
                </div>
            </div>
            <div id={`${champ.name + lane}Content`}  className="list-group-item-text collapse">
                { getChampDescriptions(champ.descriptions) }
            </div>
        </div>
    );
}

export default Champ;
