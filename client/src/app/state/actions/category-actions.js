import { actionCreator } from '../../modules/utils';

export const CategoryActions = {
  LOAD_CATEGORIES: 'LOAD_CATEGORIES',
  LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS'
}

export const loadCategories = () => {
  return actionCreator(CategoryActions.LOAD_CATEGORIES);
}

export const loadCategoriesSuccess = categories => {
  return actionCreator(CategoryActions.LOAD_CATEGORIES_SUCCESS, categories);
}