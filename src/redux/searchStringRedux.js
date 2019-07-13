import shortid from 'shortid';

// selectors
export const getSearchString= ({cards}, columnId) => cards.filter(card => (card.columnId == columnId));
export const countVisibleCards = ({cards,searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;
// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE = createActionName('CHANGE');
// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE });
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return  [...statePart, { ...action.payload, id: shortid.generate() }];
    default: 
      return statePart;
      
  }
}

