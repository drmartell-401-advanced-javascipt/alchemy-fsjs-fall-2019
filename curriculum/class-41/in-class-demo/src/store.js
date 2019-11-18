import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import { thunkMiddleware } from './middleware/thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
);