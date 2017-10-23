import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/';
import { epicMiddleware } from './epics/';

export const appStore = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);