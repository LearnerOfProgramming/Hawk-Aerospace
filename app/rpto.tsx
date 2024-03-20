import Link from "next/link";
import ImageCard from "./component-library/imagecard"
import { rajdhani } from "./layout"
import { outfit } from "./stats"
import { IoPlayCircleOutline } from 'react-icons/io5';
import RegularCard from "./component-library/regularcard";





export default function RPTOSection() {
    return (<>

        <div className="py-24 w-11/12 flex flex-col justify-center items-center border-b-2 border-primary">
            <div className={outfit.className}>

                <h1 className="  font-semibold text-2xl lg:text-3xl text-secondary  text-center ">Training</h1>
                <div className={rajdhani.className}>

                    <h1 className="  font-semibold text-5xl lg:text-7xl text-center pt-4 ">RPTO</h1>
                </div>
                <div className="flex justify-center w-full flex-col items-center">

                    <p className="text-center pt-3 text-base lg:text-xl w-5/6 text-pretty" >
                        all projects that we have already done , proven can help to use more comfortable,
                    </p>
                    <p className="text-center  text-base lg:text-xl w-5/6" >
                        then can used by client from our business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3  md:gap-0 xl:gap-10 ">
                    <RegularCard heading="Drone Pilot" content="Small" image="/assets/home/RPTO/drone.jpeg" />
                    <RegularCard heading="Drone Pilot" content="Medium" image="/assets/home/RPTO/drone.jpeg" />
                    <RegularCard heading="Drone Pilot" content="Agriculture" image="/assets/home/RPTO/drone.jpeg" />
                </div>
            </div>
        </div>
    </>)
}


