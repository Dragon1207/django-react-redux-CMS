import { CategoryActions } from './category-actions';

const CATEGORY_INITIAL_STATE = {
  categoryList: []
}

export const categoriesReducer = (state = CATEGORY_INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActions.LOAD_CATEGORIES_SUCCESS:
      return { ...state, categoryList: action.payload }
    default:
      return state;  
  }
}