import React from 'react';
import { Link } from 'react-router';

import Champ from './Champ';

const Lane = ({ name, champList }) => {

    const getChampList = () => {
            if (champList && champList.length !== 0) {
                return champList.map((champ, i) => {
                    return <Champ key={ i } champ={champ} />
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
