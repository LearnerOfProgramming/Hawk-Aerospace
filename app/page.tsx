
import { CarouselSize } from "./imagecarousel";
import './page.css';


import { AccordionDemo } from "./faq";
import ImageCard from "./imagecard";
import { GrServices } from "react-icons/gr";
import Image from "next/image";
import Mission from "./misson";
import Overlaymsg from "./overlaymsg";
import Stats from "./stats";
import Products from "./products";

import ServicesHome from "./services";


const Home = () => {


    const images = [
     
        "/assets/image6.jpeg",
        "/assets/image3.jpeg",
        "/assets/image4.jpeg",
        "/assets/image5.jpeg",
        "/assets/image6.jpeg",
    ];
    const Separator = <div className=" mb-96 "></div>



    return (
        <>
            <div className="flex flex-col items-center h-auto overflow-x-hidden">
                <CarouselSize id="main-carousel" className=" flex items-start w-screen  carousel overflow-hidden bg-white select-none " keyword="Image" innerclass="" images={images} />
                <Overlaymsg/>
                <Stats />
                <Mission/>
                <Products />
                <ServicesHome/> 
                
                <div className="w-11/12 rounded-sm m-4 p-12 mt-20 border-2">
                    <h1 className="text-4xl font-bold mb-2">FAQs</h1>
                    <AccordionDemo />
                </div>

            </div>


        </>
    )
}

export default Home;