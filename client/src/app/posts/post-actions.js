import { actionCreator } from '../modules/utils';

export const PostActions = {
  LOAD_POSTS: 'LOAD_POSTS',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  GET_POST_DETAIL: 'GET_POST_DETAIL',
  GET_POST_DETAIL_SUCCESS: 'GET_POST_DETAIL_SUCCESS'
}

export const loadPosts = () => {
  return actionCreator(PostActions.LOAD_POSTS);
}

export const loadPostsSuccess = posts => {
  return actionCreator(PostActions.LOAD_POSTS_SUCCESS, posts);
}

export const getPostDetail = id => {
  return actionCreator(PostActions.GET_POST_DETAIL, id);
}

export const getPostDetailSuccess = detail => {
  return actionCreator(PostActions.GET_POST_DETAIL_SUCCESS, detail);
}