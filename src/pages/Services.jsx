export default function Services(){

    const services_arr = [
        {
            "ServiceId":"1",
            "ServiceName":"Web Development",
            "ServiceImg":""
        },
        {
            "ServiceId":"2",
            "ServiceName":"Computer Troubleshooting",
            "ServiceImg":""
        },
        {
            "ServiceId":"3",
            "ServiceName":"Web App Infrastructure",
            "ServiceImg":""
        }
    ]

    return (
        <div className="container mx-auto pt-20">

            <section className="white:text-gray-900 dark:text-white accent:text-white">

                <h4 className="font-bold uppercase text-2xl mb-10">🛠 Services Offered</h4>

                <div className="flex item-center justify-between flex-wrap w-full">

                    {services_arr.map((service) => (

                        <div className="text-center mt-2 mb-2">
                            <div className="bg-slate-300 w-[300px] h-[200px] mb-2"></div>
                            <p className="font-bold">{service.ServiceName}</p>
                        </div>
                    ))}


                </div>

            </section>

        </div>
    )
}