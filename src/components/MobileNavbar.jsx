import { Link } from "react-router-dom"

export default function MobileNavbar(){

    return (
        <div className="sticky top-0 backdrop-blur-lg lg:hidden z-30">
            <section>
                <div className="lg:container ml-7 mr-7 pt-20 mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li className="me-2" role="presentation">
                        <Link to="/about">
                            <button 
                                className="inline-block p-4 border-b-2 rounded-t-lg uppercase font-bold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 white:text-gray-900 dark:text-white accent:text-white" 
                                id="profile-tab" 
                                data-tabs-target="#profile" 
                                type="button" 
                                role="tab" 
                                aria-selected="false">
                                About
                            </button>
                        </Link>
                    </li>
                    <li className="me-2" role="presentation">
                        <Link to="/projects">
                            <button 
                                className="inline-block p-4 border-b-2 rounded-t-lg uppercase font-bold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 white:text-gray-900 dark:text-white accent:text-white" 
                                id="dashboard-tab" 
                                data-tabs-target="#dashboard" 
                                type="button" 
                                role="tab" 
                                aria-selected="false">
                                Projects
                            </button>
                        </Link>
                    </li>
                    <li className="me-2" role="presentation">
                        <Link to="/services">
                            <button 
                                className="inline-block p-4 border-b-2 rounded-t-lg uppercase font-bold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 white:text-gray-900 dark:text-white accent:text-white" 
                                id="settings-tab" 
                                data-tabs-target="#settings" 
                                type="button" 
                                role="tab" 
                                aria-selected="false">
                                Services
                            </button>
                        </Link>
                    </li>
                    {/* <li className="me-2" role="presentation">
                        <button 
                            className="inline-block p-4 border-b-2 rounded-t-lg uppercase font-bold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 white:text-gray-900 dark:text-white accent:text-white" 
                            id="contacts-tab" 
                            data-tabs-target="#contacts" 
                            type="button" 
                            role="tab" 
                            aria-controls="contacts" 
                            aria-selected="false">
                            Artworks
                        </button>
                    </li> */}
                    <li className="me-2" role="presentation">
                        <Link to="/github">
                            <button 
                                className="inline-block p-4 border-b-2 rounded-t-lg uppercase font-bold hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 white:text-gray-900 dark:text-white accent:text-white" 
                                id="contacts-tab" 
                                data-tabs-target="#contacts" 
                                type="button" 
                                role="tab" 
                                aria-selected="false">
                                Github
                            </button>
                        </Link>
                    </li>
                </ul>
                </div>
          </section>
        </div>
    )
}