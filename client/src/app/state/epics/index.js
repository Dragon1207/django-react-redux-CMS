import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { postDetailEpic, postsEpic } from './posts.epic';
import { categoriesEpic } from './categories.epic';

const rootEpic = combineEpics(
  postDetailEpic,
  postsEpic, 
  categoriesEpic)
export const epicMiddleware = createEpicMiddleware(rootEpic);