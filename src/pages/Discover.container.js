import { connect } from 'react-redux';
import Discover from './Discover';
import { discoverNext, discoverPrev } from '../store';

const mapStateToProps = state => ({
  person: state.people[state.discover - 1]
});

const mapDispatchToProps = dispatch => ({
  showNextPerson: () => dispatch(discoverNext()),
  showPreviousPerson: () => dispatch(discoverPrev()),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Discover);
