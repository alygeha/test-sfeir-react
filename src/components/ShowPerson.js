import React from 'react';
import Person from "./Person";

const ShowPerson = ({person}) => (
    <div className="card-container">
        <Person person={person} />
    </div>
);

export default ShowPerson;