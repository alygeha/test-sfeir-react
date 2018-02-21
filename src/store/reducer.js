import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import peopleReducer from './people/reducer';
import { searchChanged } from './search/actions';

const reducer = combineReducers({
  people: peopleReducer,
  search: searchReducer,
});

export default reducer;