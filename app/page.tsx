
import { CarouselSize } from "./imagecarousel";
import './page.css';


import ImageCard from "./component-library/imagecard";
import { GrServices } from "react-icons/gr";
import Image from "next/image";
import Mission from "./misson";
import Overlaymsg from "./overlaymsg";
import Stats from "./stats";
import Products from "./products";

import ServicesHome from "./services";
import RPTOSection from "./rpto";
import Stats2 from "./component-library/stats2";
import Testimonial from "./testimonial";
import FAQ from "./stash/faq";


const Home = () => {


    const images = [
     
        "/assets/home/slider/image1.jpg",
        "/assets/home/slider/image2.jpg",
        "/assets/home/slider/image3.jpg",
        "/assets/home/slider/image4.jpg",
        
    ];
    const Separator = <div className=" mb-96 "></div>



    return (
        <>
            <div className="flex flex-col items-center h-auto overflow-x-hidden">
                <CarouselSize id="main-carousel" className=" flex items-start w-screen  carousel overflow-hidden bg-white select-none " keyword="Image" innerclass="" images={images} />
                {/* <Overlaymsg/> */}
                <Stats />
                <Mission/>
                <Products />
                <ServicesHome /> 
                <RPTOSection/>
                <Stats2 />
                <Testimonial/>
            </div>
        </>
    )
}

export default Home;