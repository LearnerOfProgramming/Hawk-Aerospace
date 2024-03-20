import Link from "next/link";
import ImageCard from "./component-library/imagecard"
import { rajdhani } from "./layout"
import { outfit } from "./stats"
import { Card } from "@/components/ui/card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"



function TestimonialCard() {
    return (<>

      
        <div className={outfit.className}>

            <Card className="pl-4 pr-10 py-3 pb-10 flex flex-col items-start rounded-none shadow">
                <div className=" head flex">

                    <div className=" avatar">
                        <Avatar className=" aspect-auto w-32 h-32">
                            <AvatarImage src="/assets/home/testimonial/avatar.avif" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="text-left p-4  mt-4">
                            <h1 className="text-primary font-black text-lg">Angel Rose</h1>
                            <h1 className=" text-slate-600 text-xs">Creative Manager</h1>
                    </div>
                </div>
                <div className=" content pl-6">
                "There are many variations passages of Lorem Ipsum majority some by words which don't look . 
                There are many variations passages of Lorem don't look . "
                </div>
            </Card>
        
        </div>

    </>)
}

export default function Testimonial() {
    return (<>
        <div className="py-24 w-11/12 flex flex-col justify-center items-center ">
            <div className={outfit.className}>

                <h1 className="  font-semibold text-2xl lg:text-3xl text-secondary  text-center ">Testimonial</h1>
                <div className={rajdhani.className}>

                    <h1 className="  font-semibold text-5xl lg:text-7xl text-center pt-4 ">People Talk about us</h1>
                </div>
                <div className="flex justify-center w-full flex-col items-center">

                    <p className="text-center pt-3 text-base lg:text-xl w-5/6 text-pretty" >
                        all projects that we have already done , proven can help to use more comfortable,
                    </p>
                    <p className="text-center  text-base lg:text-xl w-5/6" >
                        then can used by client from our business
                    </p>
                </div>

                {/* <div className="flex justify-evenly  ">
                    <ImageCard content="10 Liters" heading="Agricultural Drone" image="/assets/drone1.webp" />
                    <ImageCard heading="Agricultural Drone" content="12 Liters" image="/assets/drone1.webp" />
                    <ImageCard heading="Agricultural Drone" content="16 Liters" image="/assets/drone1.webp" />
                </div> */}

            </div>
            <div className="grid grid-cols-1  xl:grid-cols-3 gap-10 mt-10  w-5/6  lg:w-9/12 xl:w-full ">

            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            </div>


        </div>
    </>)
}