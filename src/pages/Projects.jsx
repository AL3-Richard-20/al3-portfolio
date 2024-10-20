export default function Projects(){

    return (
        <div className="container mx-auto pt-20">

            <section>

                <h4 className="font-bold uppercase text-2xl mb-10">🏆 Projects Accomplished</h4>

                <div className="flex justify-between w-full mt-3 mb-3" id="project_card">

                    <div className="bg-slate-300 w-[600px] h-auto"></div>

                    <div className="p-4 w-full text-left">
                        <h4 className="font-bold uppercase text-1xl mb-2">Web Project n (Year)</h4>
                        <p className="mb-2"><b>Company:</b> Company Name</p>
                        <p className="mb-2"><b>Stack Used:</b> WAMP</p>
                        <ul>
                            <li>HTML/CSS/Boostrap</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>JQuery</li>
                        </ul>
                        <button 
                            type="button" 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4">
                            View Details
                        </button>
                    </div>

                </div>

            </section>

        </div>
    )
}