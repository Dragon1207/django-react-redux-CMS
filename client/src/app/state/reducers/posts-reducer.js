import { PostActions } from '../actions/post-actions';

const INITIAL_STATE = {
  post: {},
  list: [],
  loading: false
}

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActions.LOAD_POSTS_SUCCESS:
      return { ...state, list: action.payload }
    case PostActions.GET_POST_DETAIL:
      return { ...state, loading: true }  
    case PostActions.GET_POST_DETAIL_SUCCESS:
      return Object.assign({}, state, { post: action.payload, loading: false })
    default:
      return state 
  }
}