import { combineReducers } from 'redux';
import { postsReducer } from './posts-reducer';
import { categoriesReducer } from './categories.reducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer
})