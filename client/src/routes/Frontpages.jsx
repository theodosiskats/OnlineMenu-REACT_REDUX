import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/layout/frontpage/Footer";
import Navbar from "../components/layout/frontpage/NavbarFront";
import Catalogue from '../components/frontpage/pages/Catalogue'
import Home from "../components/frontpage/pages/Home";
import About from "../components/frontpage/pages/About";
import NotFound from "../components/frontpage/pages/NotFound";

function Frontpage() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen w-screen">
        <Navbar />
        {/* TODO - fix the blank screen on manual page reload - common problem with nested routes */}
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="About" element={<About />} />
            <Route exact path="Catalogue/:category" element={<Catalogue />} />
            <Route exact path="notfound" element={<NotFound root={'/frontpage'} />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Frontpage
