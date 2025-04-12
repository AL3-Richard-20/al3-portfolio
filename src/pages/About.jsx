import trece_pic from '../assets/images/about_images/Trece.jpeg'
import seveneleven_pic from '../assets/images/about_images/seveneleven_png.png'
import graduation_pic from '../assets/images/about_images/Graduation_jpg.jpg'
import onsemi_pic from '../assets/images/about_images/onsemi1.jpg'
import tsukiden_pic from '../assets/images/about_images/tsukiden1.jpg'
import uratex_pic from '../assets/images/about_images/URATEX_Fam.jpg'

export default function About({ aboutimg, setAboutImg, setModalClass, modalClassHidden, modalClassOpen }){

    var trece_pic_img       = trece_pic
    var seveneleven_pic_img = seveneleven_pic
    var graduation_pic_img  = graduation_pic
    var onsemi_pic_img      = onsemi_pic
    var tsukiden_pic_img    = tsukiden_pic
    var uratex_pic_img      = uratex_pic

    return (
        <div>

            <div className="animate__animated animate__fadeInUp lg:container ml-7 mr-7 pt-20">
                <section className="white:text-gray-900 graytheme:text-white accent:text-white">
                    <h4 className="font-bold uppercase text-2xl">😎 Ikigai</h4><br/>
                    <p className="text-justify">To develop efficient, robust, and reliable systems which makes an impact to my clients/company by making sure that the requirements defined are met.</p><br/>
                    <p className="text-justify">also, to honor, serve, and love my family.</p><br/>
                    {/* <p className="text-justify">and most importantly, to honor God.</p> */}
                </section><br/><br/>

                <section className="white:text-gray-900 graytheme:text-white accent:text-white">
                    <h4 className="font-bold uppercase text-2xl">📖 Bio</h4><br/>
                    <table className="w-full">
                        <tbody>
                            <tr className="flex item-center justify-start flex-col lg:flex-row w-full">
                                <td className="px-6 py-4 w-full lg:w-[30%]"><p className="font-bold">1998</p></td>
                                <td className="px-6 py-4 w-full">
                                    <p className="opacity-75 hover:opacity-100 cursor-pointer" 
                                        title="Click mo lang po" 
                                        onClick={ () => { setAboutImg(trece_pic_img); setModalClass(modalClassOpen) }}>
                                        Born in Trece Martirez, Cavite
                                    </p>
                                </td>
                            </tr>
                            <tr className="flex item-center justify-start flex-col lg:flex-row w-full">
                                <td className="px-6 py-4 w-full lg:w-[30%]"><p className="font-bold">2017</p></td>
                                <td className="px-6 py-4 w-full">
                                    <p className="opacity-75 hover:opacity-100 cursor-pointer"
                                        title="Click mo lang po" 
                                        onClick={ () => { setAboutImg(seveneleven_pic_img); setModalClass(modalClassOpen) }}>
                                    Worked @7-Eleven Philippines<br/>
                                    (Crew / Staff)
                                    </p>
                                </td>
                            </tr>
                            <tr className="flex item-center justify-start flex-col lg:flex-row w-full">
                                <td className="px-6 py-4 w-full lg:w-[30%]"><p className="font-bold">2020</p></td>
                                <td className="px-6 py-4 w-full">
                                    <p className="opacity-75 hover:opacity-100 cursor-pointer" 
                                        title="Click mo lang po" 
                                        onClick={ () => { setAboutImg(graduation_pic_img); setModalClass(modalClassOpen) }}>
                                    Graduated @Cavite State University - Carmona Campus<br/>
                                    (Bachelor of Science in Information Technology)
                                    </p>
                                </td>
                            </tr>
                            <tr className="flex item-center justify-start flex-col lg:flex-row w-full">
                                <td className="px-6 py-4 w-full lg:w-[30%]"><p className="font-bold">2021 - 2022</p></td>
                                <td className="px-6 py-4 w-full">
                                    <p className="opacity-75 hover:opacity-100 cursor-pointer" 
                                        title="Click mo lang po" 
                                        onClick={ () => { setAboutImg(onsemi_pic_img); setModalClass(modalClassOpen) }}>
                                    Worked @ON Semiconductor Philippines Incorporated (OSPI)<br/>
                                    (Web Developer)
                                    </p>
                                </td>
                            </tr>
                            <tr className="flex item-center justify-start flex-col lg:flex-row w-full">
                                <td className="px-6 py-4 w-full lg:w-[30%]"><p className="font-bold">2022 - 2023</p></td>
                                <td className="px-6 py-4 w-full">
                                    <p className="opacity-75 hover:opacity-100 cursor-pointer" 
                                        title="Click mo lang po" 
                                        onClick={ () => { setAboutImg(tsukiden_pic_img); setModalClass(modalClassOpen) }}>
                                    Worked @Tsukiden Electric Industries Philippines Incorporated (TEIPI)<br/>
                                    (IS Programmer / IS Technician)
                                    </p>
                                </td>
                            </tr>
                            <tr className="flex item-center justify-start flex-col lg:flex-row w-full">
                                <td className="px-6 py-4 w-full lg:w-[30%]"><p className="font-bold">2023 - Present</p></td>
                                <td className="px-6 py-4 w-full">
                                    <p className="opacity-75 hover:opacity-100 cursor-pointer" 
                                        title="Click mo lang po" 
                                        onClick={ () => { setAboutImg(uratex_pic_img); setModalClass(modalClassOpen) }}>
                                    Currently working @URATEX Philippines (MULTIFLEX RNC)<br/>
                                    (Application Developer)
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section><br/><br/>

                <section className="white:text-gray-900 graytheme:text-white accent:text-white">
                    <h4 className="font-bold uppercase text-2xl">Things I ❤ Doing</h4><br/>
                    <table>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4"><p> - Music</p></td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">
                                    <p> - Painting</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">
                                    <p> - Web App Development</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

            </div>

        </div>
    )
}