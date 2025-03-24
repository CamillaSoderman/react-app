
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/header.jsx'
import Footer from './Components/Footer.jsx'

import Home from './Pages/index.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import Experiance from './Pages/Experiance.jsx'
import Notfound from './Pages/NotFound.jsx'


export default function App() {
  

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiance" element={<Experiance />} />
         {/*  <Route path="*" element={<Notfound />} />  */}
        </Routes>
        <Footer />

    </>
  )
}

