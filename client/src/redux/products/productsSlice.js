import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import productsService from './productsService'

const initialState = {
  products: [],
  product: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Get all products
export const getProducts = createAsyncThunk(
  'products/getAll',
  async (_, thunkAPI) => {
    try {
      return await productsService.getProducts()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get products by categories for frontpage catalogue
export const getProductsbyCategory = createAsyncThunk(
  'products/getProductsbyCategory',
  async (category, thunkAPI) => {
    try {
      return await productsService.getProductsbyCategory(category)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)


//These are the new ACTIONS
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // .addCase(createProduct.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(createProduct.fulfilled, (state) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      // })
      // .addCase(createProduct.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getProductsbyCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProductsbyCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(getProductsbyCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // .addCase(getProduct.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(getProduct.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.product = action.payload
      // })
      // .addCase(getProduct.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
      // .addCase(updateProduct.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(updateProduct.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.product = action.payload
      // })
      // .addCase(updateProduct.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
  },
})
export const { reset } = productsSlice.actions
export default productsSlice.reducer