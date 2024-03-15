import Link from "next/link";
import ImageCard from "./imagecard"
import { rajdhani } from "./layout"
import { outfit } from "./stats"
import { IoPlayCircleOutline } from 'react-icons/io5';





export default function Products() {
    return (<>

        <div className="py-24 w-11/12 flex flex-col justify-center items-center border-b-2 border-primary">
            <div className={outfit.className}>

                <h1 className="  font-semibold text-3xl text-secondary  text-center ">Products</h1>
                <div className={rajdhani.className}>

                    <h1 className="  font-semibold text-7xl   text-center pt-4 ">OUR DRONES</h1>
                </div>
                <p className="text-center pt-3" >
                    all projects that we have already done , proven can help to use more comfortable,
                </p>
                <p className="text-center" >
                    then can used by client from our business
                </p>

                <div className="flex justify-evenly  ">
                    <ImageCard content="10 Liters" heading="Agricultural Drone" image="/assets/drone1.webp" />
                    <ImageCard heading="Agricultural Drone" content="12 Liters" image="/assets/drone1.webp" />
                    <ImageCard heading="Agricultural Drone" content="16 Liters" image="/assets/drone1.webp" />
                </div>
            </div>
            
            <Link href={'/products'}>
                <button className=" mt-10 text-secondary group flex bg-white shadow-md rounded-full outline-2 outline-secondary outline  ease-in delay-50 duration-300 px-10 py-2  hover:bg-secondary hover:text-white hover:outline-white text-lg">
                    
                    See All Products
                </button>
            </Link> 
        </div>
    </>)
}