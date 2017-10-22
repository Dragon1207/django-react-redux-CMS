import { combineReducers } from 'redux';
import { postsReducer } from './posts-reducer' 

export const BlogApp = combineReducers({
  posts: postsReducer
})