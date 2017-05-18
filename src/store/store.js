import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
//import { ping } from './enhancers/ping'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

function configureStore(initialState) {
  //const logger = createLogger()
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers')
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store;
}


export const store=configureStore();
