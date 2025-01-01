import { Link } from "react-router-dom"
import NavbarLogo from "./NavbarLogo"

export default function Navbar({ themeColor, setThemeColor }){

    return (    
        <div>
            <nav className="lg:container mx-auto backdrop-blur-lg fixed w-full left-0 z-50 top-0">

                <div className="flex items-center justify-between p-4 w-auto">

                    <Link to="/about" 
                        className="flex items-center justify-between lg:space-x-3 lg:ml-0">

                        <NavbarLogo themeColor={themeColor} />

                    </Link>

                    <div 
                        className="flex items-center justify-between lg:basis-1/2" 
                        id="navbar-default">

                        <ul className="hidden font-medium lg:flex p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8  lg:mt-0 lg:border-0 white:text-gray-900 graytheme:text-white accent:text-white">
                            <li>
                                <Link to="/about" 
                                    className="text-dark uppercase">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" 
                                    className="text-dark uppercase">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" 
                                    className="text-dark uppercase">
                                    Services
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/artworks" 
                                    className="text-dark uppercase">
                                    Artworks
                                </Link>
                            </li> */}
                            <li>
                                <Link to="https://github.com/AL3-Richard-20" 
                                    target="_blank"
                                    className="text-dark uppercase">
                                    Github
                                </Link>
                            </li>

                            {/* Theme Picker */}
                            {/* <li className="flex items-center justify-between">
                                <span 
                                    className="bg-black border border-white rounded-full h-5 w-5 mr-2 cursor-pointer" 
                                    onClick={ () => { setThemeColor("dark") }}
                                    >
                                </span>
                                <span 
                                    className="bg-white border border-black rounded-full h-5 w-5 ml-2 mr-2 cursor-pointer"
                                    onClick={ () => { setThemeColor("white") }}>
                                </span>
                                <span 
                                    className="bg-cyan-800 border border-black rounded-full h-5 w-5 ml-2 cursor-pointer" 
                                    onClick={ () => { setThemeColor("accent") }}>
                                    </span>
                            </li> */}

                        </ul>

                        <div className="flex items-center justify-end">
                            <span 
                                className="bg-black border border-white rounded-full h-5 w-5 mr-2 cursor-pointer" 
                                onClick={ () => { setThemeColor("graytheme") }}>
                            </span>
                            <span 
                                className="bg-white border border-black rounded-full h-5 w-5 ml-2 mr-2 cursor-pointer"
                                onClick={ () => { setThemeColor("white") }}>
                            </span>
                            <span 
                                className="bg-cyan-800 border border-black rounded-full h-5 w-5 ml-2 cursor-pointer" 
                                onClick={ () => { setThemeColor("accent") }}>
                            </span>
                        </div>

                    </div>

                </div>

            </nav>
        </div>
    )
}