import { PostActions } from '../actions/post-actions';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case PostActions.LOAD_POSTS_SUCCESS:
      return { ...state, list: action.payload }
    case PostActions.LOAD_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload }  
    case PostActions.GET_POST_DETAIL_SUCCESS:
      return { ...state, id: action.payload }  
    default:
      return state 
  }
}