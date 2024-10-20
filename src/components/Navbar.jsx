import { Link } from "react-router-dom"
import al3_logo from '../assets/images/Logo_1_V1_Icon.png'

export default function Navbar(){

    return (    
        <div>
            <nav className="container mx-auto backdrop-blur-lg fixed w-full left-0 z-20 top-0">

                <div className="mx-auto max-w-screen-xl flex flex-wrap items-center justify-between p-4 w-full">

                    <Link to="/about" 
                        className="flex items-left space-x-3 rtl:space-x-reverse">
                        <img src={ al3_logo } className="h-9" alt="AL3 Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-dark">
                            AL3 
                        </span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                    <div 
                        className="hidden w-full md:block md:w-auto" 
                        id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
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
                            <li>
                                <Link to="/artworks" 
                                    className="text-dark uppercase">
                                    Artworks
                                </Link>
                            </li>
                            <li>
                                <Link to="github" 
                                    className="text-dark uppercase">
                                    Github
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}