import { searchChanged } from './actions';
import reducer from './reducer';

describe('searchReducer', () => {
  const testPeople = freeze([
    { id: '1', firstname: 'John' },
    { id: '2', firstname: 'Jane' },
    { id: '3', firstname: 'Joe' }
  ]);


  it('should initialize state with search set to an empty string', () => {
    const actualState = reducer(undefined, {});
    expect(actualState).toEqual('');
  });

  it('should replace search with the string in SEARCH_CHANGED action', () => {
    const action = searchChanged('test');
    const actualState = reducer('', action);
    expect(actualState).toEqual(action.search);
  });
});