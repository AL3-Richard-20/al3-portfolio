import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

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
import ImageModal from './components/ImageModal'

function App() {

  // let multi_path = () => useRoutes([
  //   { path:"/", element:<About /> },
  //   { path:"/about", element:<About /> }
  // ])

  // return multi_path;
  var modal_class_hidden = 'hidden sticky w-full overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-[500] justify-center items-center inset-0 h-screen'
  var modal_class_open   = 'sticky w-full overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-[500] justify-center items-center inset-0 h-screen'

  const [themeColor, setThemeColor] = useState("graytheme")
  const [aboutimg, setAboutImg] = useState("No Result")
  const [modal_class, setModalClass] = useState(modal_class_hidden)

  // bg-cyan-900
  // bg-zinc-800

  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className={themeColor}>

        <div className="white:bg-white graytheme:bg-zinc-800 accent:bg-cyan-900">

          {/* ===================== Image Modal =================== */}
            <ImageModal 
              aboutimg={aboutimg}
              modalClass={modal_class} 
              setModalClass={setModalClass} 
              modalClassHidden={modal_class_hidden} />
          {/* ===================== Image Modal END =============== */}

          <Navbar themeColor={themeColor} setThemeColor={setThemeColor} />

          <Jumbotron />

          <MobileNavbar />

          <Routes>
            <Route 
              path="/about" 
              element={ 
                <About 
                  updateAboutImg={setAboutImg}
                  setModalClass={setModalClass} 
                  modalClassOpen={modal_class_open} />
              }>
            </Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/artworks" element={<Artworks />}></Route>
            {/* <Route path="/github" element={<Github />}></Route> */}
            <Route 
              path="*" 
              element={
                <About 
                  updateAboutImg={setAboutImg}
                  setModalClass={setModalClass} 
                  modalClassOpen={modal_class_open}/>
              }>
            </Route>
          </Routes>

          <Footer />

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App
