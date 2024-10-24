import { useState } from "react"

import me_state1 from '../assets/images/Me_state1.png'
import me_state2 from '../assets/images/Me_state2.png'

export default function Jumbotron(){

    const [easter_egg_trigger, changeEasterEgg] = useState(me_state1)

    function triggerEasterEgg(){

        changeEasterEgg(me_state2)

        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
    }

    return (
        <div className="animate__animated animate__flash lg:container mx-auto pt-20">
            <section>
                <div className="flex items-center justify-items-center flex-col py-3 px-4 mx-auto max-w-screen-xl lg:py-10">
                    <img 
                        src={easter_egg_trigger} 
                        className="mb-10 h-[200px] lg:h-[150px] text-center" 
                        onClick={ () => triggerEasterEgg()}
                        alt="" />
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none white:text-gray-900 dark:text-white md:text-5xl lg:text-3xl">
                        Richard del S. Altre
                    </h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                        Web Developer | IT Technician | Artist 
                    </p>
                </div>
            </section>
        </div>
    )
}