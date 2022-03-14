import axios from 'axios'

const API_URL = '/api/subcategories'

// Get subcategories List
const getSubcategories = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

// Get subcategory
const getSubcategory = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

// Get subcategories by category for frontpage catalogue
const getSubcategoriesbyCategory = async (category) => {

  const response = await axios.get(`${API_URL}/${category}`)

  return response.data
}

// Create new subcategory
const createSubcategory = async (subcategoryData) => {
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
  }
  const response = await axios.post(API_URL, subcategoryData, config)
  return response.data
}

// Update subcategory
const updateSubcategory = async (payload) => {
  const {id, data} = payload
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  const response = await axios.put(`${API_URL}/${id}`, data, config)
  return response.data
}

// Delete subcategory
const deleteSubcategory = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`)
  return response.data
}

const subcategoriesService = {
  getSubcategories,
  getSubcategory,
  getSubcategoriesbyCategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory
}

export default subcategoriesService