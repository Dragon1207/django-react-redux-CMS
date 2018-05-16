import { CategoryActions } from './category-actions';

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CategoryActions.LOAD_CATEGORIES_SUCCESS:
      return { ...state, list: action.payload }
    default:
      return state;  
  }
}