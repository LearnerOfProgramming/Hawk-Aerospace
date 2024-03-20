"use client";

import Image from "next/image"
import Link from "next/link"
import Contactus from "./buttons/contactus"
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { josefin } from "./fonts/josefin";


// export const josefin = Josefin_Sans({ subsets: ["latin"] });


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };


    const nav_elems: string[] = [
        "Products",
        "Services",
        "Training",
        "About Us",

    ]

    const nav_links: string[] = [
        "products",
        "services",
        "rpto",
        "aboutus",

    ]
    return (
        <>
            <div className={josefin.className}>

                <nav className=' z-50  overflow-hidden h-36   top-0 left-0  fixed  w-full opacity-100  flex justify-center items-center '>
                    <div className='bg-white/50 backdrop-blur-sm   w-11/12 justify-between flex items-center h-24 rounded-3xl shadow-md  '>

                        <Link href={'/'}>

                            <img className=" ml-8 h-auto w-48 opacity-90 " src="/assets/logo.png" alt="none" />
                        </Link>
                        <div className=" hidden  xl:flex justify-evenly items-center w-4/5 pl-10" >
                            {nav_elems.map((key, index) => {
                                return (<><Link href={`/${nav_links[index]}`}>
                                    <button className=" hover:border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100  text-xl">{key}</button>
                                </Link>
                                </>
                                )
                            })}
                            <Contactus />
                        </div>

                        <div className="xl:hidden flex px-10 h-full items-center justify-center ">


                            <Button className="max-md:hidden bg-secondary/80 h-4/6 rounded-2xl  hover:bg-sky-400" onClick={toggleDropdown}>
                                <RxHamburgerMenu size={50} />
                            </Button>
                            <Button className="md:hidden bg-secondary/80 h-4/6 rounded-2xl hover:bg-sky-400" onClick={toggleDropdown}>
                                <RxHamburgerMenu size={40} />
                            </Button>

                        </div>
                    </div>

                    {/* Mobile dropdown menu */}

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 1, y: -8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1, y: -8 }}
                                className="w-full  fixed top-32  inset-x-0 xl:hidden z-50 flex justify-center"
                            >
                                <div className="w-11/12 flex justify-end">

                                    <div className="flex flex-col w-1/2 md:w-2/5  bg-white/50  backdrop-blur-sm  shadow-lg rounded-2xl p-2 items-center ">

                                        {nav_elems.map((key, index) => (
                                            <Link key={index} href={`/${nav_links[index]}`} className={index !== nav_elems.length - 1 ? 'border-b-2 w-full flex justify-center' : ' w-full flex justify-center'}>
                                                <button className="hover:border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100 text-xl my-4" onClick={toggleDropdown}>
                                                    {key}
                                                </button>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                            </motion.div>

                        )}
                    </AnimatePresence>

                </nav>
            </div>
        </>
    )
}