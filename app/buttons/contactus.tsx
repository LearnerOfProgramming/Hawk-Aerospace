import Link from "next/link"



export default function Contactus() {
    return (<><Link href={'/contactus'}>
        <button className="      bg-secondary px-10 py-3 shadow-md rounded-full text-neutral-50 hover:bg-sky-500 ease-in delay-50 duration-150 scale-110">Contact Us</button>
    </Link></>)
}