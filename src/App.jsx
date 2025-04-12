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

function App() {

  // let multi_path = () => useRoutes([
  //   { path:"/", element:<About /> },
  //   { path:"/about", element:<About /> }
  // ])

  // return multi_path;
  var modal_class_hidden = 'hidden sticky w-full overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-[500] justify-center items-center inset-0 h-screen'
  var modal_class_open   = 'sticky w-full overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-[500] justify-center items-center inset-0 h-screen'

  const [themeColor, setThemeColor] = useState("graytheme")
  const [aboutimg, setAboutImg] = useState("")
  const [modal_class, setModalClass] = useState(modal_class_hidden)

  // bg-cyan-900
  // bg-zinc-800

  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className={themeColor}>

        <div className="white:bg-white graytheme:bg-zinc-800 accent:bg-cyan-900">

          <div id="default-modal" tabIndex="-1" aria-hidden="true" className={ modal_class }>

            <div className="relative">

                <div className="relative h-screen white:bg-white graytheme:bg-zinc-800 accent:bg-cyan-900">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        {/* <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                        </h3> */}
                        <button 
                          type="button" 
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                          onClick = { () => { setModalClass(modal_class_hidden) }}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4 flex items-center justify-center">
                        <img 
                          src={aboutimg} 
                          loading="lazy" 
                          className="h-auto w-auto max-h-[600px] max-w-full" 
                          decoding="async" 
                          fetchpriority="high"
                          alt="" />
                    </div>
                </div>
            </div>

          </div>

          <Navbar themeColor={themeColor} setThemeColor={setThemeColor} />

          <Jumbotron />

          <MobileNavbar />

          <Routes>
            <Route 
              path="/about" 
              element={ 
                <About 
                  aboutimg={aboutimg} 
                  setAboutImg={setAboutImg} 
                  setModalClass={setModalClass} 
                  modalClassHidden={modal_class_hidden}
                  modalClassOpen={modal_class_open} />
              }>
            </Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/artworks" element={<Artworks />}></Route>
            {/* <Route path="/github" element={<Github />}></Route> */}
            <Route path="*" element={<About />}></Route>
          </Routes>

          <Footer />

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App
