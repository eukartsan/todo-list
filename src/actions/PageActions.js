export const SET_YEAR = 'SET_YEAR'
export const ADD_ITEM = 'ADD_ITEM'

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year,
  }
}

export function additem(item) {
  return dispatch => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
})
}}
