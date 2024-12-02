

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



// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Work />
      <Services />
      <Resume />
      <Contact />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

