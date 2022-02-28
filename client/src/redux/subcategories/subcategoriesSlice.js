import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import subcategoriesService from './subcategoriesService'

const initialState = {
  subcategories: [],
  subcategory: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Get all subcategories
export const getSubcategories = createAsyncThunk(
  'subcategories/getAll',
  async (_, thunkAPI) => {
    try {
      return await subcategoriesService.getSubcategories()
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

// Get subcategories by categories for frontpage catalogue
export const getSubcategoriesbyCategory = createAsyncThunk(
  'subcategories/getSubcategoriesbyCategory',
  async (category, thunkAPI) => {
    try {
      return await subcategoriesService.getSubcategoriesbyCategory(category)
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
export const subcategoriesSlice = createSlice({
  name: 'subcategory',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // .addCase(createSubcategory.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(createSubcategory.fulfilled, (state) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      // })
      // .addCase(createSubcategory.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
      .addCase(getSubcategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSubcategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categories = action.payload
      })
      .addCase(getSubcategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSubcategoriesbyCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSubcategoriesbyCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.subcategories = action.payload
      })
      .addCase(getSubcategoriesbyCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // .addCase(getSubcategory.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(getSubcategory.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.subcategory = action.payload
      // })
      // .addCase(getSubcategory.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
      // .addCase(updateSubcategory.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(updateSubcategory.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.subcategory = action.payload
      // })
      // .addCase(updateSubcategory.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
  },
})
export const { reset } = subcategoriesSlice.actions
export default subcategoriesSlice.reducer