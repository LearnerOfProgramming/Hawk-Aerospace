"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export function CarouselSize(props : any) {

  // const [emblaRef] = useEmblaCarousel({ loop: true }, [
  //   Autoplay({ delay: 1000 })
  // ])
  const content = [
    {
      title: "Image 1",
      img: " ",
      desc: " ",
    },
  ]
  return (
    <Carousel
      opts={{
        align: "start",
        
      }}
      className={props.className}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className={props.innerclass}>
            <div className="">
              
                <div className="flex aspect-auto bg-white  items-center justify-center -mx-5">
                  {props.images ? <img className="h-full w-screen object-cover filter blur-0" src={props.images[index]} /> :
                    <span className="text-3xl font-semibold">{props.keyword} {index + 1}</span>}
                </div>
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> 
       <CarouselNext /> */}
    </Carousel>
  )
}