import * as discover from './discover/actions';

export * from './people/actions';
export * from './search/actions';

export function discoverNext() {
  return (dispatch, getState) => {
    const total = getState().people.length;
    dispatch(discover.discoverNext(total));
  };
}

export function discoverPrev() {
  return (dispatch, getState) => {
    const total = getState().people.length;
    dispatch(discover.discoverPrev(total));
  };
}