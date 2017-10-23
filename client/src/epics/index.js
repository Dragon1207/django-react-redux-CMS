import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { postsEpic } from './posts.epic';
import { categoriesEpic } from './categories.epic';

const rootEpic = combineEpics(postsEpic, categoriesEpic)
export const epicMiddleware = createEpicMiddleware(rootEpic);