import { Josefin_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import Contactus from "./buttons/contactus"

export const josefin = Josefin_Sans({ subsets: ["latin"] })

export default function Navbar() {



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

                <nav className=' z-30  overflow-hidden h-36   top-0 left-0  fixed  w-full opacity-100  flex justify-center items-center '>
                    <div className='bg-white/50 backdrop-blur-sm   w-11/12 justify-around flex items-center h-24 rounded-3xl shadow-md  '>

                        <Link href={'/'}>

                            <img className=" ml-8 h-auto w-48 opacity-90 " src="/assets/logo.png" alt="none" />
                        </Link>
                        <div className=" flex justify-evenly items-center w-4/5 pl-10" >
                            {nav_elems.map((key, index) => {
                                return (<><Link href={`/${nav_links[index]}`}>
                                    <button className=" hover:border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100  text-xl">{key}</button>
                                </Link>

                                </>
                                )
                            })}
                           
                            <Contactus/>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}