import axios from 'axios'
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_LIST_BY_CATEGORY_REQUEST,
  PRODUCTS_LIST_BY_CATEGORY_SUCCESS,
  PRODUCTS_LIST_BY_CATEGORY_FAIL
} from './productsConstants'

export const listProducts = (category) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_LIST_BY_CATEGORY_REQUEST })

    const { data } = await axios.get(`/api/front/products/${category}`)

    dispatch({
      type: PRODUCTS_LIST_BY_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
