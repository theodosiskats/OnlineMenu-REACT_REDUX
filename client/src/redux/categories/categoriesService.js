import axios from 'axios'

const API_URL = '/api/categories'

// Get categories List
const getCategories = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

const categoriesService = {
  getCategories,
}

export default categoriesService