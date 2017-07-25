import React from 'react';

const Lane = ({ name }) => {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading" data-toggle="collapse" data-target={`#${name}Content`}>{ name }</div>
            <ul id={`#${name}Content`} className="list-group collapse">
                <li className="list-group-item">
                    <a href="#" className="btn btn-sucess btn-lg btn-block">Add a champion</a>
                </li>
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    );
};

export default Lane;
