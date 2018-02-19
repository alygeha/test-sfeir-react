import React from 'react';

import Person from './Person';

const cycleOrder = (state, props) => (
  { order: (state.order+1) % props.people.length }
);


class Discover extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      order: 0,      
    };
  }

  componentDidMount() {
    this.iid = setInterval(() => this.showNextPerson(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.iid);
  }

  showNextPerson() {
    this.setState(cycleOrder);
  }

  render() {
    const { people } = this.props;
    const { order } = this.state;
    return (
      <Person person={people[order]} />
    );    
  }
}

export default Discover;