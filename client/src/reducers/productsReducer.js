import {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_FAIL
  } from '../constants/productsConstants'
  
  export const productsListReducer = (state = { loading: true, products: [], error : {} }, action) => {
    switch (action.type) {
      case PRODUCTS_LIST_REQUEST:
        return { loading: true, products: [] }
      case PRODUCTS_LIST_SUCCESS:
        return { loading: false, products: action.payload }
      case PRODUCTS_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  