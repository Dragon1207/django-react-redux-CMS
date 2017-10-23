import { PostActions } from '../actions/post-actions';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case PostActions.LOAD_POSTS_SUCCESS:
      return { ...state, payload: action.posts }
    case PostActions.LOAD_CATEGORIES_SUCCESS:
      return { ...state, payload: action.categories }  
    case PostActions.GET_POST_DETAIL_SUCCESS:
      return { ...state, payload: action.post }  
    default:
      return state 
  }
}