export const PostActions = {
  LOAD_POSTS: 'LOAD_POSTS',
  LOAD_CATEGORIES: 'LOAD_CATEGORIES',
  GET_POST_DETAIL: 'GET_POST_DETAIL'
}

export const loadPosts = posts => {
  return {
    type: PostActions.LOAD_POSTS,
    posts
  }
}

export const getPostDetail = post => {
  type: PostActions.GET_POST_DETAIL,
  post  
}

export const loadCategories = categories => {
  return {
    type: PostActions.LOAD_CATEGORIES,
    categories
  }
}