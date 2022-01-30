import axios from 'axios'
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
} from '../constants/productsConstants'

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_LIST_REQUEST })

    const { data } = await axios.get('/api/front/products')

    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
