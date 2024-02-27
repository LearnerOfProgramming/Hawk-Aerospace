
import { CarouselSize } from "./imagecarousel";
import './page.css';

import { Josefin_Sans, Montserrat, Open_Sans } from "next/font/google";
import { Card, CardContent } from "@/components/ui/card";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { AccordionDemo } from "./faq";
import ImageCard from "./imagecard";


const open_sans = Montserrat({ subsets: ["latin"] })
const Home = () => {


    const images = ["/assets/image1.jpeg",
        "/assets/image2.jpeg",
        "/assets/image3.jpeg",
        "/assets/image4.jpeg",
        "/assets/image5.jpeg",
        "/assets/image6.jpeg",
    ];
    const Separator = <div className=" mb-96 "></div>



    return (
        <>
            
            
            
            <div className="flex flex-col items-center h-auto overflow-x-hidden">
                <CarouselSize id="main-carousel" className=" flex items-start w-screen  -mt-10 carousel overflow-hidden bg-white  " keyword="Image" innerclass="w-screen" images={images} />



                <div className=" bg-secondary  w-screen h-auto ">
                    <h1 className="text-5xl font-normal whitespace-pre text-white tracking-tight lg:text-7xl  justify-center flex pt-3">
                        The Drones : Our Driving Force
                    </h1>
                    <div className="flex px-20 pt-16 ">
                        <p className="text-white pr-16  w-3/5 text-3xl pt-5 text-justify">At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide. We strive to revolutionize aerial solutions through cutting-edge design, precision engineering, and advanced automation. </p>
                        <div className=" aspect-auto w-2/5 p-0 rounded-2xl overflow-hidden group h-fit">
                            <img src="/assets/drone.jpg" className="group-hover:scale-110 transition-all duration-700 ease-out" />
                        </div>
                    </div>
                    <div className="flex px-20 pt-20 pb-12">
                        <div className=" aspect-auto w-1/4 p-0 rounded-xl overflow-hidden group h-fit ">
                            <img src="/assets/agri.jpg" className=" group-hover:scale-110 transition-all duration-700 ease-out" />
                        </div>
                        <p className="text-white pl-16  w-3/4 text-3xl text-justify text">Our focus is on revolutionizing agriculture through advanced drone technology tailored specifically for crop surveillance. Our mission is to empower farmers with precise, efficient, and data-driven solutions that optimize crop health and maximize yields. </p>
                    </div>
                </div>
                <div className="flex justify-evenly w-screen pt-20 pb-14 text-2xl font-semibold">
                    <div className="flex flex-col">
                        <div className="flex justify-center pb-6">
                            <MdOutlineAccessTime size={100} />
                        </div>
                        <h2 className=" text-center">
                            1000+ Hours
                        </h2>
                        <h2 className=" text-center">
                            Trained
                        </h2>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-center pb-6">
                            <MdOutlineWorkspacePremium size={100} />
                        </div>
                        <h2 className=" text-center">
                            Premium
                        </h2>
                        <h2 className=" text-center">
                            Services
                        </h2>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-center pb-6">
                            <GrUserWorker size={100} />
                        </div>
                        <h2 className=" text-center">
                            50+
                        </h2>
                        <h2 className=" text-center">
                            Employees
                        </h2>
                    </div>
                    <div className="flex flex-col -mx-4">
                        <div className="flex justify-center pb-6">
                            <TbReportSearch size={100} />
                        </div>
                        <h2 className=" text-center">
                            200+ Surveillance
                        </h2>
                        <h2 className=" text-center">
                            Reports
                        </h2>

                    </div>

                </div>
                <div className="py-24 bg-alkaline border-t-2 w-screen">

                <h1 className="  font-semibold text-8xl  text-center ">Services Offered</h1>
                <div className="flex justify-evenly  bg-alkaline">
                    <ImageCard content="Drones in agriculture offer farmers advanced capabilities such as crop monitoring, pest control, and irrigation management. These unmanned aerial vehicles (UAVs) can provide high-resolution images and data, helping farmers make informed decisions to minimize environmental impact." heading="Agriculture" />
                    <ImageCard heading= "Telecom" content= "Drones in the telecom industry are revolutionizing infrastructure management. These unmanned aerial vehicles (UAVs) inspect cell towers and even deploy temporary cell sites for events, ensuring optimal performance and reliability. They reduce downtime and improving service quality for consumers."/>
                    <ImageCard heading ="Military" content="Drones play a crucial role in military operations, providing surveillance, reconnaissance, and combat support. They enhance situational awareness, target identification, and precision strikes, predict attacks and is useful for reducing risk to human personnel and improving mission effectiveness."/>
                </div>
                </div>
                <div className="w-screen px-10">
                <AccordionDemo />
                </div>
                
            </div>


        </>
    )
}

export default Home;