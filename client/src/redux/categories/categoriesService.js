import axios from 'axios'

const API_URL = '/api/categories'

// Get categories List
const getCategories = async () => {

  const response = await axios.get(API_URL)

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






/////////////////////////////////////////////
const categoriesService = {
  getCategories,
  createCategory,
}
export default categoriesService