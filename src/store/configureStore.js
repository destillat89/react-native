import { createStore } from 'redux';
import rootReducer from '../reducers/index';
//import { ping } from './enhancers/ping'
// import { createLogger } from 'redux-logger'
// import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  //const logger = createLogger()
  const store = createStore(rootReducer, initialState);

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers')
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store;
}
