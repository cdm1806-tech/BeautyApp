import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Booking from "./pages/Booking"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}

export default App