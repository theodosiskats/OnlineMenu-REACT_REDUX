import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesListReducer } from './reducers/categoriesReducers'
import { productsListReducer } from './reducers/productsReducer'
import { subcategoriesListReducer } from './reducers/subcategoriesReducers'

const reducer = combineReducers({ categoriesList: categoriesListReducer, subcategoriesList: subcategoriesListReducer, productsList: productsListReducer  })

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
