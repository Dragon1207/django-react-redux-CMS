import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { postsEpic } from './posts.epic';

const rootEpic = combineEpics(postsEpic)
export const epicMiddleware = createEpicMiddleware(rootEpic);