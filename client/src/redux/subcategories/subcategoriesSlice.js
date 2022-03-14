import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import subcategoriesService from './subcategoriesService'

const initialState = {
  subcategories: [],
  subcategory: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all subcategories
export const getSubcategories = createAsyncThunk('subcategories/getAll', async (_, thunkAPI) => {
  try {
    return await subcategoriesService.getSubcategories()
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

// Get subcategory
export const getSubcategory = createAsyncThunk('subcategories/getSubcategory', async (id, thunkAPI) => {
  try {
    return await subcategoriesService.getSubcategory(id)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

// Get subcategories by category for frontpage catalogue
export const getSubcategoriesbyCategory = createAsyncThunk(
  'subcategories/getSubcategoriesbyCategory',
  async (category, thunkAPI) => {
    try {
      return await subcategoriesService.getSubcategoriesbyCategory(category)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Create new subcategory
export const createSubcategory = createAsyncThunk(
  'subcategories/createSubcategory',
  async (subcategoryData, thunkAPI) => {
    try {
      return await subcategoriesService.createSubcategory(subcategoryData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Update subcategory
export const updateSubcategory = createAsyncThunk('subcategories/updateSubcategory', async (payload, thunkAPI) => {
  try {
    return await subcategoriesService.updateSubcategory(payload)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

// Delete subcategory
export const deleteSubcategory = createAsyncThunk('subcategories/deleteSubcategory', async (id, thunkAPI) => {
  try {
    return await subcategoriesService.deleteSubcategory(id)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

//These are the new ACTIONS
export const subcategoriesSlice = createSlice({
  name: 'subcategory',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(getSubcategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSubcategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.subcategories = action.payload
      })
      .addCase(getSubcategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getSubcategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSubcategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.subcategory = action.payload
      })
      .addCase(getSubcategory.rejected, (state, action) => {
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

      .addCase(createSubcategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSubcategory.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createSubcategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateSubcategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateSubcategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.subcategory = action.payload
      })
      .addCase(updateSubcategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteSubcategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteSubcategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.subcategory = action.payload
      })
      .addCase(deleteSubcategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})
export const { reset } = subcategoriesSlice.actions
export default subcategoriesSlice.reducer
