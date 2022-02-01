import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesListReducer } from './reducers/categoriesReducers'
import { productsListReducer } from './reducers/productsReducer'
import { subcategoriesListReducer } from './reducers/subcategoriesReducers'

// TODO - fix persistor

// const persistConfig = {
//   key: 'root',
//   storage,
// }

const reducer = combineReducers({ categoriesList: categoriesListReducer, subcategoriesList: subcategoriesListReducer, productsList: productsListReducer  })

// const persistedReducer = persistReducer(persistConfig, reducer)

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  // persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

// export default () => {
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

export default store
