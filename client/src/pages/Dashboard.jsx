import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashNavBar from '../components/layout/dashboard/DashNavBar';
import DashHeader from '../components/layout/dashboard/DashHeader';
import DashIndex from './DashIndex';
import NotFound from './NotFound';

function Dashboard() {
  return (
    <>
    <div className="grid grid-cols-15 h-screen">
      <div className="col-span-3">
        <DashNavBar />
      </div>
      <div className="col-span-12">
        <DashHeader />
        <Routes>
          <Route exact path='' element={<DashIndex />} />
          <Route exact path="/*" element={<NotFound root={'/dashboard'} />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default Dashboard
