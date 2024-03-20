
"use client";
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from 'embla-carousel-react'
import './imagecarousel.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
 
useEmblaCarousel.globalOptions = { loop: true }
export function CarouselSize(props : any) {

  return (
    <Carousel
    plugins={[
      Autoplay({
        delay: 4000,
      }),
    ]}
  
      className={props.className}
    >
      <CarouselContent>
        {Array.from({ length: Object.keys(props.images).length }).map((_, index) => (
          <CarouselItem key={index} className={props.innerclass}>
            <div className="">
              
                <div className="flex aspect-auto w-full overflow-hidden  bg-white  items-center justify-center h-screen innercarousel ">
                  {props.images ? <img alt="Image" className="w-full h-full object-cover " src={props.images[index]} /> :
                    <span className="text-3xl font-semibold">{props.keyword} {index + 1}</span>}
                </div>
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> 
       <CarouselNext /> */}
      <div className="w-full h-full  absolute flex items-end ">
        <div className="w-full h-2/6 bg-gradient-to-b from-transparent to-white ">

        </div>
      </div>
    </Carousel>
  )
}