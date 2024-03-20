import Image from "next/image";
import { rajdhani } from "../layout";


export default function ImageCard(props: {
    image: string,
    content?: string,
    heading?: string,

}) {
    return (
        <>
            
            <div className={rajdhani.className}>

            <div className=" mt-24 bg-[#E5E5E5]  aspect-auto mx-10 overflow-hidden  pt-10 rounded-2xl  group   group hover:shadow-lg flex flex-col  pb-16 transition-all duration-500  ease-in-out hover:scale-110 ">
                <img src={props.image} className="w-full h-full object-cover 
                transition-all duration-700  ease-in-out  aspect-auto z-10 " alt="Image" />
                <div className="pt-4">

                <h1 className="text-center text-4xl font-semibold">{props.heading}</h1>
                <p className="text-center text-2xl font-medium">{props.content}</p>
                </div>
                </div>
            </div>
                
        </>
    )
}