import axios from 'axios'
import {
  SUBCATEGORIES_LIST_REQUEST,
  SUBCATEGORIES_LIST_SUCCESS,
  SUBCATEGORIES_LIST_FAIL,
  SUBCATEGORIES_LIST_BY_CATEGORY_REQUEST,
  SUBCATEGORIES_LIST_BY_CATEGORY_SUCCESS,
  SUBCATEGORIES_LIST_BY_CATEGORY_FAIL,
} from './subcategoriesConstants'

export const listSubcategories = (category) => async (dispatch) => {
  try {
    dispatch({ type: SUBCATEGORIES_LIST_BY_CATEGORY_REQUEST })

    const { data } = await axios.get(`/api/front/subcategories/${category}`)

    dispatch({
      type: SUBCATEGORIES_LIST_BY_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SUBCATEGORIES_LIST_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
