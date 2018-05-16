import { PostActions, loadPostsSuccess, getPostDetailSuccess } from './post-actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { ApiFacade } from '../modules/api.facade';
const api = new ApiFacade();

export const postsEpic = action$ => action$
  .ofType(PostActions.LOAD_POSTS)
  .mergeMap(action =>
    api.get('posts')
      .map(res => loadPostsSuccess(res))
);
  
export const postDetailEpic = action$ => action$
  .ofType(PostActions.GET_POST_DETAIL)
  .mergeMap(action =>
    api.get(`posts/${action.payload}`)
    .map(res => getPostDetailSuccess(res))
);