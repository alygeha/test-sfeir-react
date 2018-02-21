import {  SEARCH_CHANGED } from './actions';
import { replaceOrPrependById } from '../../utils';

const initialState = '';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHANGED:
      return action.search;
    default:
      return state;
  }
};

export default reducer;