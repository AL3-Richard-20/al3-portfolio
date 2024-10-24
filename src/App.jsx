import { useState } from "react"
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop";

import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import Jumbotron from './components/Jumbotron'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Artworks from './pages/Artworks'
import Github from './pages/Github'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function App() {

  // let multi_path = () => useRoutes([
  //   { path:"/", element:<About /> },
  //   { path:"/about", element:<About /> }
  // ])

  // return multi_path;

  const [themeColor, setThemeColor] = useState("dark")

  // bg-cyan-900
  // bg-zinc-800

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={themeColor}>
        <div className="white:bg-white dark:bg-zinc-800 accent:bg-cyan-900">
          <Navbar setThemeColor={setThemeColor} />
          <Jumbotron />
          <MobileNavbar />
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/artworks" element={<Artworks />}></Route>
            <Route path="/github" element={<Github />}></Route>
            <Route path="*" element={<About />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
