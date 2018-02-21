import { PEOPLE_RECEIVED, PERSON_RECEIVED } from './actions';
import { replaceOrPrependById } from '../../utils';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_RECEIVED:
      return action.people;
    case PERSON_RECEIVED:
      return replaceOrPrependById(action.person, state.people);
    default:
      return state;
  }
};

export default reducer;