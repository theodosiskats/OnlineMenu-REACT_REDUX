import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './redux/categories/categoriesSlice'
import subcategoriesReducer from './redux/subcategories/subcategoriesSlice'
import productsReducer from './redux/products/productsSlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    subcategories: subcategoriesReducer,
    products: productsReducer,
  },
})

export default store