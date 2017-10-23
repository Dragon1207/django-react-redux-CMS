import { ajax } from 'rxjs/observable/dom/ajax';
import { PostActions, loadPostsSuccess } from '../actions/post-actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

const baseUrl = 'localhost:8000/api/';

export const postsEpic = action$ => action$
  .ofType(PostActions.LOAD_POSTS)
  .mergeMap(action =>
    ajax.getJSON(`${baseUrl}/posts/`)
      .map(res => loadPostsSuccess(res))
  )