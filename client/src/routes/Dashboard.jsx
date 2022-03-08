import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../components/layout/dashboard/NavBar';
import Index from '../components/dashboard/pages/Index';
import NotFound from '../components/frontpage/pages/NotFound';
import Categories from '../components/dashboard/pages/Categories';
import NewCategory from '../components/dashboard/pages/NewCategory';
import NewProduct from '../components/dashboard/pages/NewProduct';
import CategoryEdit from '../components/dashboard/pages/CategoryEdit'

function Dashboard() {
  return (
    <>
      <NavBar>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/newcategory" element={<NewCategory />} />
          <Route path="/categories/:id" element={<CategoryEdit />} />
          <Route path="/products/newproduct" element={<NewProduct />} />
          <Route path="/*" element={<NotFound root={'/dashboard'} />} />
        </Routes>
      </NavBar>
    </>
  )
}

export default Dashboard
