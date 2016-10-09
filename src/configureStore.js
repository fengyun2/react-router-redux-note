import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let buildStore = compose(applyMiddleware(thunk))(createStore)

export default function configureStore(initialState) {
  const store = buildStore(rootReducer, initialState)
  return store
}
