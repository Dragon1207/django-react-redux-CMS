import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger'

import { rootReducer } from './state/reducers/';
import { epicMiddleware } from './state/epics/';

const loggerMiddleware = createLogger()

export const appStore = compose(autoRehydrate())
  (createStore)(rootReducer,
   applyMiddleware(epicMiddleware, loggerMiddleware));