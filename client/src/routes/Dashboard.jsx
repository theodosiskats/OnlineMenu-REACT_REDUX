import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../components/layout/dashboard/NavBar';
import Header from '../components/layout/dashboard/Header';
import Index from '../components/dashboard/pages/Index';
import NotFound from '../components/frontpage/pages/NotFound';
import NewCategory from '../components/dashboard/pages/NewCategory';

function Dashboard() {
  return (
    <>
      <NavBar>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path="/NewCategory" element={<NewCategory />} />
          <Route exact path="/*" element={<NotFound root={'/dashboard'} />} />
        </Routes>
      </NavBar>
    </>
  )
}

export default Dashboard
