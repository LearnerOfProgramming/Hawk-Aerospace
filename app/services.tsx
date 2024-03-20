import Link from "next/link";
import ImageCard from "./component-library/imagecard"
import { rajdhani } from "./layout"
import { outfit } from "./stats"
import { IoPlayCircleOutline } from 'react-icons/io5';
import ServiceCard from "./component-library/regularcard";
import RegularCard from "./component-library/regularcard";






export default function ServicesHome() {
    return (<>

        <div className="py-24 w-11/12 flex flex-col justify-center items-center border-b-2 border-primary ">
            <div className={outfit.className}>

                <h1 className="  font-semibold text-2xl lg:text-3xl text-secondary  text-center ">Services</h1>
                <div className={rajdhani.className}>

                    <h1 className="  font-semibold text-5xl lg:text-7xl   text-center pt-4 ">What do we do</h1>
                </div>
                <div className="flex justify-center w-full flex-col items-center">

                <p className="text-center pt-3 text-base lg:text-xl w-5/6 text-pretty" >
                    all projects that we have already done , proven can help to use more comfortable,
                </p>
                <p className="text-center  text-base lg:text-xl w-5/6" >
                    then can used by client from our business
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3   xl:gap-10 ">
                    <RegularCard heading="Precision Agriculture" image="/assets/home/services/image1.jpg" />
                    <RegularCard heading="Precision Agriculture"  image="/assets/home/services/image2.png" />
                    <RegularCard heading="Mapping & Surveying"  image="/assets/home/services/image1.jpg" />
                </div>
            </div>
            
            <Link href={'/products'}>
                <button className=" mt-10 text-secondary group flex bg-white shadow-md rounded-full outline-2 outline-secondary outline  ease-in delay-50 duration-300 px-10 py-2  hover:bg-secondary hover:text-white hover:outline-white text-lg">
                    
                    See All Services
                </button>
            </Link> 
        </div>
    </>)
}