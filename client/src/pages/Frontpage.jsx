import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/layout/frontpages/Footer";
import Navbar from "../components/layout/frontpages/Navbar";
import Home from "./Home";
import About from "./About";
import Catalogue from "./Catalogue";
import NotFound from "./NotFound";

function Frontpage() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen w-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Catalogue/:category" element={<Catalogue />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Frontpage
