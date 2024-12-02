

import React from 'react';
import Profile from './components/Home/Profile';
import Navbar from './components/Navbar/Navbar';
import About from './components/AboutMe/About';
import Work from './components/work/Work';
import Services from './components/Services/Services';
import Contact from './components/ContactMe/Contact';
import Resume from './components/Resume/Resume';
import Blog from './components/Blogs/Blog';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App

