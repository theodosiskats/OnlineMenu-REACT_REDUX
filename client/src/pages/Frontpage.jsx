import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/layout/frontpages/Footer";
import Navbar from "../components/layout/frontpages/Navbar";
import Catalogue from '../components/frontpage/Catalogue'
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function Frontpage() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen w-screen">
        <Navbar />
        {/* TODO - fix the blank screen on manual page reload - common problem with nested routes */}
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Catalogue/:category" element={<Catalogue />} />
            <Route exact path="/notfound" element={<NotFound root={'frontpage'} />} />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Frontpage
