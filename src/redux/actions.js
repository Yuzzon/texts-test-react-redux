import { SEARCH_TEXT, SET_PAGE } from './types'

export const searchText = (input) => {
   return {
      type: SEARCH_TEXT,
      payload: input
   }
}
export const setPage = (num) => {
   return {
      type: SET_PAGE,
      payload: num
   }
}
