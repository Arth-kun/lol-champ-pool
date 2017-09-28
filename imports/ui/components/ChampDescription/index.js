import React from 'react';

const ChampDescription = ({ description }) => {
    return (
        <dl className="dl-horizontal">
            <dt>{ description.name }</dt>
            <dd>{ description.content }</dd>
        </dl>
    );
}

export default ChampDescription;
