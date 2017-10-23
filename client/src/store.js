import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';

import { rootReducer } from './reducers/';
import { epicMiddleware } from './epics/';

// export const appStore = createStore(
//   rootReducer,
//   applyMiddleware(epicMiddleware)
// );

export const appStore = compose(autoRehydrate())
  (createStore)(rootReducer, applyMiddleware(epicMiddleware));