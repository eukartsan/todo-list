export const SET_YEAR = 'SET_YEAR'
export const ADD_ITEM = 'ADD_ITEM'
export function setYear(year) {
  return dispatch => {
    dispatch({
      type: SET_YEAR,
      payload: year,
    })

    setTimeout(() => {
      dispatch({
        type: ADD_ITEM,
        payload: [1, 2, 3],
      })
    }, 1000)
  }
}
