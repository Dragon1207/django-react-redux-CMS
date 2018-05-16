import { CategoryActions, loadCategoriesSuccess } from '../actions/category-actions';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import { ApiFacade } from '../../modules/api.facade';
const api = new ApiFacade();

export const categoriesEpic = action$ => action$
  .ofType(CategoryActions.LOAD_CATEGORIES)
  .concatMap(() =>
    api.get('categories')
      .map(res => loadCategoriesSuccess(res))
  );