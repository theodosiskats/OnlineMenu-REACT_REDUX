import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import categoriesService from './categoriesService'

const initialState = {
  categories: [],
  category: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Get all categories
export const getCategories = createAsyncThunk(
  'categories/getAll',
  async (_, thunkAPI) => {
    try {
      return await categoriesService.getCategories()
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
export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // .addCase(createCategory.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(createCategory.fulfilled, (state) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      // })
      // .addCase(createCategory.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categories = action.payload
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // .addCase(getCategory.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(getCategory.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.category = action.payload
      // })
      // .addCase(getCategory.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
      // .addCase(updateCategory.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(updateCategory.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.category = action.payload
      // })
      // .addCase(updateCategory.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
  },
})
export const { reset } = categoriesSlice.actions
export default categoriesSlice.reducer