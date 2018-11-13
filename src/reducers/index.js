import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import { itemsReducer } from './items'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  items: itemsReducer,
})
