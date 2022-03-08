import axios from 'axios'

const API_URL = '/api/subcategories'

// Get categories List
const getSubcategories = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

// Get subcategories by category for frontpage catalogue
const getSubcategoriesbyCategory = async (category) => {

  const response = await axios.get(`${API_URL}/${category}`)

  return response.data
}

const subcategoriesService = {
  getSubcategories,
  getSubcategoriesbyCategory,
}

export default subcategoriesService