import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import storiesReducer from './stories'

const rootReducer = combineReducers({
  stories: storiesReducer,
})

const logger = require('redux-logger').default;
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const newStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
}

export default newStore;