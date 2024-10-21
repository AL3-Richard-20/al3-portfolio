import ccms_img from '../assets/images/projects/CCMS.jpg'
import eims_img from '../assets/images/projects/EIMS.jpg'
import hris_img from '../assets/images/projects/HRIS.png'
import oms_img from '../assets/images/projects/OMS.jpg'

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
                "HTML/CSS/Bootstrap",
                "PHP",
                "MySQL",
                "JQuery"
            ],
            "Description":"A Lean Six Sigma Project that aims to collect (scrape) all the hold lots record from a legacy website then send an email notification to the selected employees."
        },
        {
            "ProjectId":"2",
            "ProjectImg":"",
            "ProjectName":"Employee Break In/Out Monitoring System",
            "Year":"2021",
            "Company":"ON Semiconductor Phils. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                "HTML/CSS/Bootstrap",
                "PHP",
                "MySQL",
                "JQuery"
            ],
            "Description":"This app allows the employees to scan their IDs before going in/out to spend their breaktime. The data collected here is monitored by their supervisors."
        },
        {
            "ProjectId":"3",
            "ProjectImg":"",
            "ProjectName":"Material Control Item Withdrawal System",
            "Year":"2021",
            "Company":"ON Semiconductor Phils. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                "HTML/CSS/Bootstrap",
                "PHP",
                "MySQL",
                "JQuery"
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
                "HTML/CSS/Bootstrap",
                "PHP",
                "MySQL",
                "JQuery"
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
                "HTML/CSS/Bootstrap",
                "PHP",
                "MySQL",
                "JQuery"
            ],
            "Description":"This system was developed to manage and monitor employee records. also generates an employee ID template."
        },
        {
            "ProjectId":"6",
            "ProjectImg":`${oms_img}`,
            "ProjectName":"Production Line Output Monitoring System",
            "Year":"2022",
            "Company":"Tsukiden Electric Industries Phil. Inc.",
            "StackUsed":"WAMP",
            "StackList":[
                "HTML/CSS/Bootstrap",
                "PHP",
                "MySQL",
                "JQuery"
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
                "HTML/CSS/Bootstrap",
                "PHP",
                "MySQL",
                "JQuery"
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
                "HTML/CSS/Bootstrap",
                "PHP",
                "MySQL/Postgres",
                "JQuery"
            ],
            "Description":"A large scale system which allows the employee to Request a quotation (RFQ), purchase request (PR) and allow the Purchasing Department to transact."
        }
    ]

    return (
        <div className="container mx-auto pt-20">

            <section>

                <h4 className="font-bold uppercase text-2xl mb-10">🏆 Projects Accomplished</h4>

                { projects_arr.map((project) => (
                    
                    <div className="flex justify-between items-center w-full mt-3 mb-3" id="project_card">

                        {/* <div className="bg-slate-300 w-[600px] h-auto rounded-lg"></div> */}

                        <img src={ project.ProjectImg } className="w-[400px] h-[200px] rounded-lg overflow" alt="" />

                        <div className="p-4 w-full text-left">
                            <h4 className="font-bold uppercase text-1xl mb-2">{ project.ProjectName } ({ project.Year })</h4>
                            <p className="mb-2"><b>Company:</b> { project.Company }</p>
                            <p className="mb-2"><b>Stack Used:</b> { project.StackUsed }</p>

                            <ul>
                                { project.StackList.map((stackitem) => (
                                    <>
                                        <li>{stackitem}</li>
                                    </>
                                )) }
                            </ul>

                            <button 
                                type="button" 
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4">
                                View Details
                            </button>
                        </div>

                    </div>
                )) } 

            </section>

        </div>
    )
}