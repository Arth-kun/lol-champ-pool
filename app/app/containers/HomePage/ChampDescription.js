import React from 'react';

const ChampDescription = ({ description }) => {
    return (
        <div className="list-group-item row">
            <div className="col-sm-3">{ description.name }</div>
            <div className="col-sm-9">{ description.content }</div>
        </div>
    );
}

export default ChampDescription;
