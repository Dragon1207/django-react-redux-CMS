export const PostActions = {
  LOAD_POSTS: 'LOAD_POSTS',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_CATEGORIES: 'LOAD_CATEGORIES',
  LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS',
  GET_POST_DETAIL: 'GET_POST_DETAIL',
  GET_POST_DETAIL_SUCCESS: 'GET_POST_DETAIL_SUCCESS'
}

function actionCreator(type, payload) {
  return {
    type: type,
    payload: payload
  }
}

export const loadPosts = () => {
  return actionCreator(PostActions.LOAD_POSTS);
}

export const loadPostsSuccess = posts => (
  {
    type: PostActions.LOAD_POSTS_SUCCESS,
    payload: posts
  }
)

export const getPostDetail = id => {
  return actionCreator(PostActions.GET_POST_DETAIL, id);
}

export const getPostDetailSuccess = post => {
  return actionCreator(PostActions.GET_POST_DETAIL_SUCCESS, post);
}

export const loadCategories = () => {
  return actionCreator(PostActions.LOAD_CATEGORIES);
}

export const loadCategoriesSuccess = categories => {
  return actionCreator(PostActions.LOAD_CATEGORIES_SUCCESS, categories);
}