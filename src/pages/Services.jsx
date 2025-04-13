import service_webdesign from './../assets/images/services/Web_Design.jpg'
import service_troubleshoot from './../assets/images/services/Troubleshoot.jpg'
import service_webdev from './../assets/images/services/Web.jpg'

export default function Services(){

    const services_arr = [
        {
            "ServiceId":"1",
            "ServiceName":"Web Design",
            "ServiceImg":service_webdesign
        },
        {
            "ServiceId":"2",
            "ServiceName":"Computer Troubleshooting",
            "ServiceImg":service_troubleshoot
        },
        {
            "ServiceId":"3",
            "ServiceName":"Web App Development",
            "ServiceImg":service_webdev
        }
    ]

    return (
        <div className="animate__animated animate__fadeInUp lg:container ml-7 mr-7 pt-20">

            <section className="white:text-gray-900 graytheme:text-white accent:text-white">

                <h4 className="font-bold uppercase text-2xl mb-10">🛠 Services Offered</h4>

                <div className="flex item-center justify-between flex-wrap w-full">

                    {services_arr.map((service) => (

                        <div className="text-center my-2" key={service.ServiceId}>
                            <img src={ service.ServiceImg } 
                                className="bg-slate-300 w-full lg:w-[300px] lg:h-[200px] mb-2"/>
                            <p className="font-bold">{service.ServiceName}</p>
                        </div>
                    ))}


                </div>

            </section>

        </div>
    )
}