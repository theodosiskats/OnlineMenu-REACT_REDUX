import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../components/layout/dashboard/NavBar';
import Index from '../components/dashboard/pages/Index';
import NotFound from '../components/frontpage/pages/NotFound';
import Categories from '../components/dashboard/pages/Categories';
import NewCategory from '../components/dashboard/pages/NewCategory';

function Dashboard() {
  return (
    <>
      <NavBar>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/newcategory" element={<NewCategory />} />
          <Route path="/*" element={<NotFound root={'/dashboard'} />} />
        </Routes>
      </NavBar>
    </>
  )
}

export default Dashboard
