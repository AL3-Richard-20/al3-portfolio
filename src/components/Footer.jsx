import reactjs_logo from '../assets/images/skills/ReactJS.png'
import tailwindcss_logo from '../assets/images/skills/Tailwind.png'

export default function Footer(){

    return (
        <div className="bg-white white:bg-zinc-800 mt-10 white:text-white dark:text-dark accent:text-dark">
            <section className="animate__animated animate__fadeIn lg:container ml-7 mr-7 py-10">

                <div className="flex items-center flex-col lg:flex-row justify-between">
                    <div className="mb-10">
                        <h4 className="font-bold uppercase text-xl lg:text-2xl mb-10">🌍 Hire Me</h4>
                        <ul>
                            <li>
                                <span className="font-bold mr-3">Facebook:</span> 
                                <a href="https://www.facebook.com/richarddel333/">Richard Altre</a>
                            </li>
                            <li>
                                <span className="font-bold mr-3">Gmail:</span> 
                                <a href="#">monterorichard09@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-4">Technologies I used to build this:</p>
                        <div className="flex items-center justify-center">
                            <img 
                                src={reactjs_logo} 
                                loading="lazy" 
                                className="h-20 m-2" 
                                decoding="async" 
                                fetchpriority="high"
                                alt="React Logo" />
                            <img 
                                src={tailwindcss_logo} 
                                loading="lazy" 
                                className="h-10 m-2" 
                                decoding="async" 
                                fetchpriority="high"
                                alt="React Logo" />
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    © {new Date().getFullYear()} AL3. All Rights Reserved.
                </div>

            </section>
        </div>
    )
}