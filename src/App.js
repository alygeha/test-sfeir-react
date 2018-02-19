import React from 'react';
import './App.css';
import Card from './components/Card';
import AppBar from './components/AppBar';

const MESSAGE = 'React-200 @ AXA';

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <Card title={MESSAGE}/>
    </main>
  </div>
);

export default App;
