

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ImageCard from "./component-library/imagecard";
import { rajdhani } from "./layout";

export function ProductCarousel() {
    return (
        <Carousel className="w-1/2  ">
            <CarouselContent   >
                    
                   
                    <CarouselItem   key={1}>
            
                       
                        <div className="    flex  items-center justify-center rounded-2xl ">
                                <div className="  bg-[#E5E5E5]  overflow-hidden aspect-auto  rounded-2xl  group   group-hover:shadow-lg flex flex-col pb-4 ">
                                    <img src="/assets/drone1.webp" className=" w-full h-full object-cover p-4 z-10 " alt="Image" />
                                    <div className="">
                                        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Agricultural Drone</h1>
                                        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium">10 Litres</p>
                                    </div>
                                </div>
                            </div>
                    </CarouselItem>
                    <CarouselItem key={2}>
            
                       
                        
                    <div className="    flex  items-center justify-center rounded-2xl ">
                                <div className="  bg-[#E5E5E5]  overflow-hidden aspect-auto  rounded-2xl  group   group-hover:shadow-lg flex flex-col pb-4 ">
                                    <img src="/assets/drone1.webp" className=" w-full h-full object-cover p-4 z-10 " alt="Image" />
                                    <div className="">
                                        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Agricultural Drone</h1>
                                        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium">12 Litres</p>
                                    </div>
                                </div>
                            </div>
                    </CarouselItem>
                    <CarouselItem key={3}>
            
                       
                        
                    <div className="    flex  items-center justify-center rounded-2xl ">
                                <div className="  bg-[#E5E5E5]  overflow-hidden aspect-auto  rounded-2xl  group   group-hover:shadow-lg flex flex-col pb-4 ">
                                    <img src="/assets/drone1.webp" className=" w-full h-full object-cover p-4 z-10 " alt="Image" />
                                    <div className="">
                                        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Agricultural Drone</h1>
                                        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium">16 Litres</p>
                                    </div>
                                </div>
                            </div>
                    </CarouselItem>
                   
                  
            
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
