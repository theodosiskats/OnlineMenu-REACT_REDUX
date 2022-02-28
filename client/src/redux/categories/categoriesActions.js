import axios from 'axios'
import {
  CATEGORIES_LIST_REQUEST,
  CATEGORIES_LIST_SUCCESS,
  CATEGORIES_LIST_FAIL,
  CATEGORIES_CREATE_REQUEST,
  CATEGORIES_CREATE_SUCCESS,
  CATEGORIES_CREATE_FAIL,
} from './categoriesConstants'

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORIES_LIST_REQUEST })

    const { data } = await axios.get('/api/categories')

    dispatch({
      type: CATEGORIES_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CATEGORIES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createCategory = () => async (categoryData) => {
  try {
    // dispatch({ type: CATEGORIES_CREATE_REQUEST })

    const response = await axios.post('/api/categories', categoryData)

    // dispatch({
    //   type: CATEGORIES_CREATE_SUCCESS,
    //   payload: response,
    // })
    return response.data
  } catch (error) {
    // dispatch({
    //   type: CATEGORIES_CREATE_FAIL,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // })
    console.log('error', error)
  }

}
