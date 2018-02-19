import React from 'react';
import * as PropTypes from 'prop-types';

import Person from './Person';

const ListAll = ({people}) => {
    return (
    <div className="Discover">
        <div className="card-container">
    {people.map(person => (
        <Person key={person.id} person={person} />
    ))
    }
    </div>
    </div>);
}

export default ListAll;