import { combineReducers } from 'redux';
import { postsReducer } from '../../posts/posts-reducer';
import { categoriesReducer } from '../../posts/categories.reducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer
})