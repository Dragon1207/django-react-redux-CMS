import { PostActions } from '../actions/post-actions';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case PostActions.LOAD_POSTS:
      return { ...state, posts: action.posts }
    case PostActions.LOAD_CATEGORIES:
      return { ...state, categories: action.categories }  
    case PostActions.GET_POST_DETAIL:
      return { ...state, post: action.post }  
    default:
      return state 
  }
}