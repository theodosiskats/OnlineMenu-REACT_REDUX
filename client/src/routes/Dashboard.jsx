import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../components/layout/dashboard/NavBar'
import Index from '../components/dashboard/pages/Index'
import NotFound from '../components/frontpage/pages/NotFound'

import Categories from '../components/dashboard/pages/categories/Categories'
import NewCategory from '../components/dashboard/pages/categories/NewCategory'
import CategoryEdit from '../components/dashboard/pages/categories/CategoryEdit'

import Subcategories from '../components/dashboard/pages/subcategories/Subcategories'
import NewSubcategory from '../components/dashboard/pages/subcategories/NewSubcategory'
import SubcategoryEdit from '../components/dashboard/pages/subcategories/SubcategoryEdit'

import Products from '../components/dashboard/pages/products/Products'
import NewProduct from '../components/dashboard/pages/products/NewProduct'
import ProductEdit from '../components/dashboard/pages/products/ProductEdit'

function Dashboard() {
  return (
    <>
      <NavBar>
        <Routes>
          <Route path='/' element={<Index />} />

          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/newcategory' element={<NewCategory />} />
          <Route path='/categories/:id' element={<CategoryEdit />} />

          <Route path='/products' element={<Products />} />
          <Route path='/products/newproduct' element={<NewProduct />} />
          <Route path='/products/:id' element={<ProductEdit />} />

          <Route path='/subcategories' element={<Subcategories />} />
          <Route path='/subcategories/newsubcategory' element={<NewSubcategory />} />
          <Route path='/subcategories/:id' element={<SubcategoryEdit />} />

          <Route path='/*' element={<NotFound root={'/dashboard'} />} />
        </Routes>
      </NavBar>
    </>
  )
}

export default Dashboard
