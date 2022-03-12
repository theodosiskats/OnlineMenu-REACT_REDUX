import axios from 'axios'

const API_URL = '/api/categories'

// Get categories List
const getCategories = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Get specific category
const getCategory = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

// Create new categpry
const createCategory = async (categoryData) => {
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
  }
  const response = await axios.post(API_URL, categoryData, config)
  return response.data
}

// Delete category
const deleteCategory = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`)
  return response.data
}

// Update category
const updateCategory = async (payload) => {
  const {id, data} = payload
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
  }
  console.log(payload)
  const response = await axios.put(`${API_URL}/${id}`, data, config)
  return response.data
}

/////////////////////////////////////////////
const categoriesService = {
  getCategories,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
}
export default categoriesService