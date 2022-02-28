import axios from 'axios'

const API_URL = '/api/products'

// Get products List
const getProducts = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

// Get products by category for frontpage catalogue
const getProductsbyCategory = async (category) => {

  const response = await axios.get(`${API_URL}/${category}`)

  return response.data
}

const productsService = {
  getProducts,
  getProductsbyCategory,
}

export default productsService