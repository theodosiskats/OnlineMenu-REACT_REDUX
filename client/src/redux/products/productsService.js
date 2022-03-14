import axios from 'axios'

const API_URL = '/api/products'

// Get products List
const getProducts = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Get product
const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

// Get products by category for frontpage catalogue
const getProductsbyCategory = async (category) => {

  const response = await axios.get(`${API_URL}/${category}`)

  return response.data
}

// Create new product
const createProduct = async (productData) => {
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
  }
  const response = await axios.post(API_URL, productData, config)
  return response.data
}

// Update product
const updateProduct = async (payload) => {
  const {id, data} = payload
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  const response = await axios.put(`${API_URL}/${id}`, data, config)
  return response.data
}

// Delete product
const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`)
  return response.data
}

const productsService = {
  getProducts,
  getProduct,
  getProductsbyCategory,
  createProduct,
  updateProduct,
  deleteProduct
}

export default productsService