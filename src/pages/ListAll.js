import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, withStateHandlers, withProps } from 'recompose';
import PersonCard from '../components/PersonCard';
import SearchInput from '../components/SearchInput';


// utils

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

// enhance

const mapStateToProps = state => ({
  filteredPeople: state.people.filter(filterPerson(state.search)),
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  searchChanged: event => dispatch({ type: 'SEARCH_CHANGED', search: event.target.value })
});

const enhance = connect(mapStateToProps);

// Component

const ListAll = ({ filteredPeople, search, searchChanged }) => (
  <Fragment>
    <div className="card-container">
      { filteredPeople
        .map(person => 
          <PersonCard person={person} key={person.id} />
        )
      }
    </div>
    <div className="control-container">
      <SearchInput id="search" label="search by name"
        value={search}
        onChange={searchChanged}
      />
    </div>
  </Fragment>
);



export default enhance(ListAll);