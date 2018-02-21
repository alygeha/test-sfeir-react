import React, { Component, Fragment } from 'react';
import { pure } from 'recompose';
import { succ, pred } from '../utils';
import PersonCard from '../components/PersonCard';
import Fab from '../components/Fab';

const play = () => ({
  playing: true
});

const pause = () => ({
  playing: false
});

// subcomponents

const Fabs = pure(({playing, next, prev, play, pause}) => (
  <div className="control-container">
    <Fab kind="skip_previous" onClick={prev} />
    { playing
    ? <Fab kind="pause" large onClick={pause} />
    : <Fab kind="play_arrow" large onClick={play} />
    }
    <Fab kind="skip_next" onClick={next} />
  </div>
));

// container

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      playing: false
    }
  }

  play = () => {
    this.intervalId = setInterval(this.props.showNextPerson, 2000);
    this.props.showNextPerson();
    this.setState(play);
  };

  pause = () => {
    clearInterval(this.intervalId);
    this.setState(pause);
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    const { person, showNextPerson, showPreviousPerson } = this.props;
    const { playing } = this.state;
    return (
      <Fragment>
        <div className="card-container">
          <PersonCard person={person} />
        </div>  
        <Fabs
          playing={playing}
          next={showNextPerson}
          prev={showPreviousPerson}
          play={this.play}
          pause={this.pause}
        />
      </Fragment>
    );
  }
}

export default Discover;