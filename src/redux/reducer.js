import { SEARCH_TEXT, SET_PAGE } from './types';

const texts = require('../data/texts.json');

const inititalState = {
   texts,
   searchText: '',
   page: 1
}

export default (state = inititalState, action) => {
   switch (action.type) {
      case SEARCH_TEXT:
         return {
            ...state,
            searchText: action.payload,
            page: 1
         }
      case SET_PAGE:
         return {
            ...state,
            page: action.payload
         }
      default:
         return state;
   }
}
