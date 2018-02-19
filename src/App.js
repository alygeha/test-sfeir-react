import React, { Component } from 'react';
import './App.css';

import AppBar from './components/AppBar';
import Discover from './components/Discover';
import ListAll from './components/ListAll';
import Spinner from  './components/Spinner';

const DISCOVER = 'discover';
const LISTALL = 'show all';

const other = shown => shown === DISCOVER ? LISTALL : DISCOVER;
const toggleShown = ({ shown }) => ({ shown: other(shown) });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: LISTALL,
      people: null
    };

    this.fetchPeople = this.fetchPeople.bind(this);
  }

  componentWillMount() {
    this.fetchPeople();
  }

  toggleShown = () => this.setState(toggleShown);

  async fetchPeople() {
    try {
      const result = await fetch('/api/people')
      if (!result.ok) {
        throw Error(result.statusText);
      }
      const people = await result.json();     
      this.setState({ people });
    } 
    catch (error) {
      console.log(error);
      this.setState({
        people: null,      
      });
    }
  }
  
  render() {
    const { shown, people } = this.state;
    if(people === null) {
      return <Spinner />
    }
    return (
      <div className="App">
        <header>
          <AppBar show={other(shown)} toggleShow={this.toggleShown}/>
        </header>
        <main>
          { shown === LISTALL
          ? <ListAll people={people} />
          : <Discover people={people} />
          }
        </main>
      </div>
    );
  }
} 

export default App;
