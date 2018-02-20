import React, { Component } from 'react';
import Switch from 'react-router-dom/Switch';
import { Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';

import AppBar from './components/AppBar';
import Discover from './components/Discover';
import ListAll from './components/ListAll';
import Spinner from './components/Spinner';
import ShowPerson from './components/ShowPerson';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      people: null
    };
  }

  componentDidMount() {
    fetch('/api/people')
    .then(res => res.json())
    .then(people => this.setState({ people }));
  }

  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <header>
          <AppBar />
        </header>
        <main>
          { people === null
          ? <Spinner />
          : <Switch>
              <Route exact path="/discover" render={() =>  <Discover people={people} />} />
              <Route path="/all" render={() =>  <ListAll people={people} />} />
              <Route path="/person/:id" render={
                ({match}) =>  <ShowPerson person={people.find(p => p.id === match.params.id)} />} />
              <Redirect to="/all" />
            </Switch>
          }
        </main>
      </div>
    );
  }
} 

export default App;
