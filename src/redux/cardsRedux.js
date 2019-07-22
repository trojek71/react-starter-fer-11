import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards,searchString}, columnId) => cards.filter(card =>( (card.columnId == columnId) && (new RegExp(searchString, 'i').test(card.title))));
//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card =>( (card.columnId == columnId) ));
//export const getCardsForColumn = ({cards,searchString}) => cards.filter(cards=>(cards.title));
//export const getCardsFormAllList = ({cards}) => cards.filter(cards=>(cards.title));
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createAction_addCard = payload => ({ payload, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}