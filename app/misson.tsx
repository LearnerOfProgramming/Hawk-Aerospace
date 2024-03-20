import Link from "next/link"

import { rajdhani } from "./layout";

import { outfit } from "./stats";
import { IoPlayCircleOutline } from "react-icons/io5";
import { josefin } from "./fonts/josefin";



export default function Mission() {

    return (<>

        <div className=" bg-white  w-10/12 h-auto border-b-2 border-primary pb-14">
            <div className={rajdhani.className}>

                <div className="flex xl:flex-row flex-col-reverse pt-20 pb-12 group/text ">
                    <div className=" aspect-auto w-full xl:w-7/12 rounded-t-xl overflow-hidden group h-fit mt-16">
                        <img alt="Image" src="/assets/agri.jpg" className=" group-hover:scale-110 transition-all duration-700 ease-out" />
                    </div>


                    <div className="xl:pl-16 w-full xl:w-3/4 text-3xl  text">
                        <div className={ josefin.className}>

                        <h1 className="lg:text-3xl text-2xl text-secondary font-semibold pb-4">
                            About us
                        </h1>
                        </div>
                        <h1 className="lg:text-7xl text-4xl text-black font-semibold ">
                            About Hawk
                        </h1>
                        <div className="flex flex-col text-xl lg:text-2xl">

                            <div className={outfit.className}>

                                <p className="   opacity-90 group-hover/text:opacity-100 transition-all duration-300 ease-in-out delay-100 pt-6 font-semibold ">At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide.  </p>
                                <p className="   opacity-90 group-hover/text:opacity-100 transition-all duration-300 ease-in-out delay-100 pt-8 font-semibold ">Our focus is on revolutionizing agriculture through advanced drone technology tailored specifically for crop surveillance. Our mission is to empower farmers with
                                    precise
                                    efficient                         , and
                                    data-driven solutions
                                    , that optimize crop health and maximize yields.  </p>
                            </div>
                            <div className="pt-8 flex">

                            <Link href={'/aboutus'} className={josefin.className}>
                                <button className=" bg-secondary shadow-md rounded-full text-neutral-50 hover:bg-sky-500 ease-in delay-50 duration-150 px-8 py-2 text-base lg:text-lg mr-10 outline outline-1 outline-secondary">About Us</button>
                                </Link>

                                    
                            <Link href={'/'} className={josefin.className}>
                                    <button className=" text-indigo-500 group flex bg-white shadow-md rounded-full outline-2 outline-indigo-500 outline  ease-in delay-50 duration-300 px-10 py-2  hover:bg-indigo-500 hover:text-white hover:outline-white text-base  lg:text-lg">
                                        <IoPlayCircleOutline className="w-6 h-auto mr-2 " />
                                        Our Story
                                    </button>
                                </Link>
                                
                            
                       

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>)
}