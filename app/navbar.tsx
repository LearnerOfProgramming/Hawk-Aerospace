import Link from "next/link"


export default function Navbar() {



    const nav_elems: string[] = [
        "Products",
        "RPTO",
        "Services",
     
        "About Us",
        "Contact Us",
    ]

    const nav_links: string[] = [
        "products",
        "rpto",
        "services",

        "aboutus",
        "contactus",
    ]
    return (
        <>
            <nav className='z-10 shadow-md overflow-hidden h-24 justify-around flex items-center pr-3 top-0 fixed left-0 w-full opacity-100 bg-alkaline  '>
                <Link href={'/'}>

                <img className=" h-auto w-60 opacity-90 " src="/assets/logo.png" alt="none"/>
                </Link>
                <div className=" flex justify-evenly items-center w-4/5" >
                    {nav_elems.map((key, index) => {
                        return (<><Link href={`/${nav_links[index]}` }>
                        <button className=" hover:border-secondary hover:border-b-4 hover:rounded-sm ease-in-out delay-50 duration-100  text-lg">{key}</button>
                        </Link> 
                        
                        </>
                        )
                    })}
                    <button className=" ml-10 bg-primary px-5 py-2 rounded text-neutral-50 hover:bg-red-500 ease-in delay-100 duration-100">Register With Us</button>
                </div>

            </nav>
        </>
    )
}