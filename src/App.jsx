import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/header.jsx'
import Footer from './Components/Footer.jsx'

import Home from './Pages/index.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import Experience from './Pages/Experiance.jsx'
import Notfound from './Pages/NotFound.jsx'


export default function App() {
  

  return (
    <>
      <BrowserRouter basename="/react-app">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

