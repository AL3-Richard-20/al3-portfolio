import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Artworks from './pages/Artworks'
import Github from './pages/Github'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Jumbotron />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/artworks" element={<Artworks />}></Route>
          <Route path="/github" element={<Github />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
