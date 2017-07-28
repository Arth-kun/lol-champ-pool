import React from 'react';

import Champ from '../Champ/index';

const Lane = ({ name, champList }) => {

    const getChampList = () => {
            if (champList && champList.length !== 0) {
                return champList.map((champ, i) => {
                    return <Champ key={ i } champ={champ} lane={name} />
            });
        }
    }

    return (
        <div className="panel panel-primary">
            <div className="panel-heading" data-toggle="collapse" data-target={`#${name}Content`}>{ name }</div>
            <div id={`${name}Content`} className="list-group collapse">
                { getChampList() }
            </div>
        </div>
    );
};

export default Lane;
