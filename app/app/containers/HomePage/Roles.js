import React from 'react';

import Lane from './Lane';

const Roles = () => {

    const champListTop = [
        {
            name: 'Riven',
            descriptions: [
                {
                    'name': "Why picking it ?",
                    'content': "It's op",
                }, {
                    'name': "Against wich champ ?",
                    'content': "Nami",
                }, {
                    'name': "With wich champ ?",
                    'content': "Karthus",
                }
            ]
        }, {
            name: 'Karthus'
        }
    ];

    const champListJungle = [
        {
            name: 'Riven'
        }, {
            name: 'Karthus'
        }
    ];

    const champListMid = [
        {
            name: 'Riven'
        }, {
            name: 'Karthus'
        }
    ];

    const champListAdc = [
        {
            name: 'Riven'
        }, {
            name: 'Karthus'
        }
    ];

    const champListSupport = [
        {
            name: 'Riven'
        }, {
            name: 'Karthus'
        }
    ];

    return (
        <div>
            <Lane name='Top' champList={ champListTop } />
            <Lane name='Jungle' champList={ champListJungle } />
            <Lane name='Mid' champList={ champListMid } />
            <Lane name='Adc' champList={ champListAdc } />
            <Lane name='Support' champList={ champListSupport } />
        </div>
    );
};

export default Roles;
