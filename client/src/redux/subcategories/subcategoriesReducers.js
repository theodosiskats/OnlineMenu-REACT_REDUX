import {
  SUBCATEGORIES_LIST_REQUEST,
  SUBCATEGORIES_LIST_SUCCESS,
  SUBCATEGORIES_LIST_FAIL,
  SUBCATEGORIES_LIST_BY_CATEGORY_REQUEST,
  SUBCATEGORIES_LIST_BY_CATEGORY_SUCCESS,
  SUBCATEGORIES_LIST_BY_CATEGORY_FAIL,
} from './subcategoriesConstants'

export const subcategoriesListReducer = (
  state = { loading: true, subcategories: [], error: {} },
  action
) => {
  switch (action.type) {
    // LIST ALL SUBCATEGORIES
    case SUBCATEGORIES_LIST_REQUEST:
      return { loading: true, subcategories: [] }
    case SUBCATEGORIES_LIST_SUCCESS:
      return { loading: false, subcategories: action.payload }
    case SUBCATEGORIES_LIST_FAIL:
      return { loading: false, error: action.payload }

    // LIST ALL SUBCATEGORIES AT CLIENT THAT BELONG TO SPECIFIC
    // CATEGORY
    case SUBCATEGORIES_LIST_BY_CATEGORY_REQUEST:
      return { loading: true, subcategories: [] }
    case SUBCATEGORIES_LIST_BY_CATEGORY_SUCCESS:
      return { loading: false, subcategories: action.payload }
    case SUBCATEGORIES_LIST_BY_CATEGORY_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}