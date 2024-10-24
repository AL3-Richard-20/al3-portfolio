import ccms_img from '../assets/images/projects/CCMS.jpg'
import eims_img from '../assets/images/projects/EIMS.jpg'
import hris_img from '../assets/images/projects/HRIS.png'
import oms_img from '../assets/images/projects/OMS.jpg'

import lng_img from '../assets/images/projects/LNGHome.png'

import html_logo from '../assets/images/skills/HTML.png'
import css_logo from '../assets/images/skills/CSS.png'
import bs_logo from '../assets/images/skills/Bootstrap.png'
import js_logo from '../assets/images/skills/JS.png'
import jquery_logo from '../assets/images/skills/JQuery.png'
import php_logo from '../assets/images/skills/php.png'
import mysql_logo from '../assets/images/skills/MySQL.png'


export default function Projects(){

    const projects_arr = [
        {
            "ProjectId":"1",
            "ProjectImg":"",
            "ProjectName":"Hold Lots Email Notification (Web Scraper)",
            "Year":"2021",
            "Company":"ON Semiconductor Phils. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                `${html_logo}`,
                `${bs_logo}`,
                `${jquery_logo}`,
                `${php_logo}`,
                `${mysql_logo}`,
            ],
            "Description":"A Lean Six Sigma Project that aims to collect (scrape) all the hold lots record from a legacy website then send an email notification to the selected employees."
        },
        {
            "ProjectId":"2",
            "ProjectImg":`${lng_img}`,
            "ProjectName":"Lucky Numbers Game",
            "Year":"2021",
            "Company":"ON Semiconductor Phils. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                `${html_logo}`,
                `${css_logo}`,
                `${bs_logo}`,
                `${js_logo}`,
                `${php_logo}`,
                `${mysql_logo}`,
            ],
            "Description":"This app was developed for company's christmas raffle."
        },
        {
            "ProjectId":"3",
            "ProjectImg":"",
            "ProjectName":"Material Control Item Withdrawal System",
            "Year":"2021",
            "Company":"ON Semiconductor Phils. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                `${html_logo}`,
                `${bs_logo}`,
                `${jquery_logo}`,
                `${php_logo}`,
                `${mysql_logo}`,
            ],
            "Description":"This app records the withdrawal transaction of an item of every employee."
        },
        {
            "ProjectId":"4",
            "ProjectImg":`${ccms_img}`,
            "ProjectName":"Canteen Cashless Management System",
            "Year":"2022",
            "Company":"Tsukiden Electric Industries Phil. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                `${html_logo}`,
                `${bs_logo}`,
                `${jquery_logo}`,
                `${php_logo}`,
                `${mysql_logo}`,
            ],
            "Description": "This system was developed to automate the manual transaction of canteen's cashier and reports."
        },
        {
            "ProjectId":"5",
            "ProjectImg":`${hris_img}`,
            "ProjectName":"Employee Records Management System (with ID Generator)",
            "Year":"2022",
            "Company":"Tsukiden Electric Industries Phil. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                `${html_logo}`,
                `${bs_logo}`,
                `${jquery_logo}`,
                `${php_logo}`,
                `${mysql_logo}`,
            ],
            "Description":"This system was developed to manage and monitor employee records. It also generates an employee ID template."
        },
        {
            "ProjectId":"6",
            "ProjectImg":`${oms_img}`,
            "ProjectName":"Production Line Output Monitoring System",
            "Year":"2022",
            "Company":"Tsukiden Electric Industries Phil. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                `${html_logo}`,
                `${bs_logo}`,
                `${jquery_logo}`,
                `${php_logo}`,
                `${mysql_logo}`,
            ],
            "Description":"This system allows the production operator to input a number of their outputs which is collected by the system to generate a realtime graph of outputs in a timetable."
        },
        {
            "ProjectId":"7",
            "ProjectImg":`${eims_img}`,
            "ProjectName":"Employee's Canteen Transaction Monitoring",
            "Year":"2022",
            "Company":"Tsukiden Electric Industries Phil. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                `${html_logo}`,
                `${bs_logo}`,
                `${jquery_logo}`,
                `${php_logo}`,
                `${mysql_logo}`,
            ],
            "Description":"This system was developed to promote transparency to each employees by letting them monitor their canteen transactions."
        },
        {
            "ProjectId":"8",
            "ProjectImg":"",
            "ProjectName":"E-Procurement System",
            "Year":"2023",
            "Company":"URATEX (Multiflex RNC)",
            "StackUsed":"WAMP",
            "StackList":[
                `${html_logo}`,
                `${bs_logo}`,
                `${jquery_logo}`,
                `${php_logo}`,
                `${mysql_logo}`,
            ],
            "Description":"A large scale system which allows the employee to Request a quotation (RFQ), purchase request (PR) and allow the Purchasing Department to transact."
        }
    ]

    return (
        <div className="animate__animated animate__fadeInUp lg:container ml-7 mr-7 pt-20">

            <section className="white:text-gray-900 dark:text-white accent:text-white">

                <h4 className="font-bold uppercase text-xl lg:text-2xl mb-10">🏆 Projects Accomplished</h4>

                <div>
                    { projects_arr.map((project) => (
                        
                        <div key={project.ProjectName} className="flex flex-col lg:flex-row justify-between items-center w-full mt-3 mb-3" id="project_card">

                            {/* <div className="bg-slate-300 w-[600px] h-auto rounded-lg"></div> */}

                            <img src={ project.ProjectImg } loading="lazy" className="w-[400px] h-[200px] rounded-lg overflow mb-4" alt="" />

                            <div className="lg:p-4 w-full text-left mb-4">
                                <h4 className="font-bold uppercase text-1xl mb-2">{ project.ProjectName } ({ project.Year })</h4>
                                <p className="mb-2">
                                    <b>Company:</b> 
                                    <span className="white:text-gray-500 ml-2 dark:text-gray-300 accent:text-gray-300">{ project.Company }</span>
                                </p>
                                <p className="mb-2"><b>Description:</b></p>
                                <p className="mb-2"><span className="white:text-gray-500 dark:text-gray-300 accent:text-gray-300 text-justify"> { project.Description }</span></p>
                                <p className="mb-2">
                                    <b>Stack Used:</b> 
                                    <span className="white:text-gray-500 ml-2">{ project.StackUsed }</span>
                                </p>

                                <div className="flex item-center">
                                    { project.StackList.map((stackitem) => (
                                        <img 
                                            key={stackitem} 
                                            src={stackitem} 
                                            loading="lazy" 
                                            className="h-10" 
                                            decoding="async" 
                                            fetchpriority="high" />
                                    )) }
                                </div>

                                {/* <button 
                                    type="button" 
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4">
                                    View Details
                                </button> */}
                            </div>

                        </div>
                    )) } 
                </div>

            </section>

        </div>
    )
}