import {
  CATEGORIES_LIST_REQUEST,
  CATEGORIES_LIST_SUCCESS,
  CATEGORIES_LIST_FAIL,
  CATEGORIES_CREATE_REQUEST,
  CATEGORIES_CREATE_SUCCESS,
  CATEGORIES_CREATE_FAIL,
} from './categoriesConstants'

export const categoriesListReducer = (
  state = { loading: true, categories: [], error: {} },
  action
) => {
  switch (action.type) {
    case CATEGORIES_LIST_REQUEST:
      return { loading: true, categories: [] }
    case CATEGORIES_LIST_SUCCESS:
      return { loading: false, categories: action.payload }
    case CATEGORIES_LIST_FAIL:
      return { loading: false, error: action.payload }
    case CATEGORIES_CREATE_REQUEST:
      return { loading: true }
    case CATEGORIES_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload }
    case CATEGORIES_CREATE_FAIL:
      return { loading: false, error: action.payload }
    // case CATEGORIES_CREATE_RESET:
    //   return {}
    default:
      return state
  }
}

//
//
//
//
//
//
//
//
