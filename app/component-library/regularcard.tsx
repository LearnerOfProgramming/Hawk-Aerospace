import { josefin } from "../fonts/josefin";
import { rajdhani } from "../layout";



export default function RegularCard(props: {
    image: string,
    content?: string,
    heading?: string,
}) {
    return (
        <>
            
            <div className={josefin.className}>
                <div className="group hover:scale-110 transition-all duration-500  ease-in-out ">
                    
            <div className=" mt-24 bg-[#E5E5E5]  aspect-square  mx-10 overflow-hidden  rounded-2xl   group hover:shadow-lg flex flex-col     ">
                <img src={props.image} className="w-full h-full object-cover 
                transition-all duration-700  ease-in-out  aspect-auto z-10 " alt="Image" />
             
                </div>
                <h1 className=" text-center text-3xl  font-semibold mt-4">{props.heading}</h1>
                <h1 className=" text-center text-2xl  font-semibold mt-4">{props.content}</h1>
                </div>
            </div>
                
        </>
    )
}

