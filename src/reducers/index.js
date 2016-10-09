import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import items from './items'
import filter from './filter'

const rootReducer = combineReducers({
  routing,
  items,
  filter
})

export default rootReducer
