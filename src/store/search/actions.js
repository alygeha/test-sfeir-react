export const PEOPLE_RECEIVED = 'PEOPLE_RECEIVED';
export const PERSON_RECEIVED = 'PERSON_RECEIVED';
export const SEARCH_CHANGED = 'SEARCH_CHANGED';

export function searchChanged(search) {
  return {
    type: SEARCH_CHANGED,
    search
  };
}
