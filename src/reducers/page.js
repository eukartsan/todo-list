import { SET_YEAR, ADD_ITEM } from '../actions/PageActions'

const initialState = {
  year: 2018,
  items: [],
  isFetching: false,
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.payload, isFetching: true }

    case ADD_ITEM:
      return { ...state, items: action.payload, isFetching: false }

    default:
      return state
  }
}
