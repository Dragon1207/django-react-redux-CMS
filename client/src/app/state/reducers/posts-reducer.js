import { PostActions } from '../actions/post-actions';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case PostActions.LOAD_POSTS_SUCCESS:
      return { ...state, list: action.payload }
    case PostActions.GET_POST_DETAIL_SUCCESS:
      return { ...state, detail: action.payload }  
    default:
      return state 
  }
}