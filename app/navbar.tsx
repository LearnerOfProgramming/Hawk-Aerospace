import Image from "next/image"
import Link from "next/link"


export default function Navbar() {



    const nav_elems: string[] = [
        "Products",
        "Services",
        "RPTO",
     
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
            <nav className='z-10 shadow-md overflow-hidden h-24 justify-around flex items-center pr-3 top-0 fixed left-0 w-full opacity-100 bg-alkaline  '>
                <Link href={'/'}>

                <Image className=" h-auto w-60 opacity-90 " src="/assets/logo.png" alt="none"/>
                </Link>
                <div className=" flex justify-evenly items-center w-4/5 pl-10" >
                    {nav_elems.map((key, index) => {
                        return (<><Link href={`/${nav_links[index]}` }>
                        <button className=" hover:border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100  text-xl">{key}</button>
                        </Link> 
                        
                        </>
                        )
                    })}
                    <Link href={'/contactus'}>
                    <button className="      bg-primary px-5 py-2 rounded-full text-neutral-50 hover:bg-red-700 ease-in delay-50 duration-150">Contact Us</button>
                    </Link>
                </div>

            </nav>
        </>
    )
}