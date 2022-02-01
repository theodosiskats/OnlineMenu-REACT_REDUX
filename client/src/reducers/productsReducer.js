import {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_FAIL,
    PRODUCTS_LIST_BY_CATEGORY_REQUEST,
    PRODUCTS_LIST_BY_CATEGORY_SUCCESS,
    PRODUCTS_LIST_BY_CATEGORY_FAIL
  } from '../constants/productsConstants'
  
  export const productsListReducer = (state = { loading: true, products: [], error : {} }, action) => {
    switch (action.type) {
      case PRODUCTS_LIST_BY_CATEGORY_REQUEST:
        return { loading: true, products: [] }
      case PRODUCTS_LIST_BY_CATEGORY_SUCCESS:
        return { loading: false, products: action.payload }
      case PRODUCTS_LIST_BY_CATEGORY_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  // Add,edit,remove item
  //
  //
  //
  //
  //
  //
  //