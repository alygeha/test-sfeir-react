import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Discover from './pages/Discover';
import ListAll from './pages/ListAll';
import Person from './pages/Person';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

class App extends Component {
  componentDidMount() {
    this.props.loadPeople()
    .then(success => !success && alert('could not load people :('));
  }

  render() {
    const { isAppReady, savePerson } = this.props;
    return (
      <div className="App">
        <header>
          <AppBar />
        </header>
        <main>
          { !isAppReady
          ? <Spinner />
          : <Switch>
              <Route path="/all" component={ListAll} />
              <Route path="/discover" component={Discover} />
              <Route path="/person/:id" component={Person} />
              <Redirect to="/all" />
            </Switch>
          }
        </main>
      </div>
    );
  }
} 

export default App;
