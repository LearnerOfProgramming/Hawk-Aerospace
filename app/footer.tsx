import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import Newsletter from "./newsletter";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { outfit } from "./stats";
import { NewsletterDialog } from "./newsletterdialog";

export default function SiteMap() {
    return (
        <>
            <div className={outfit.className}>
                <div className="w-full bg-dark  overflow-none pt-10 flex flex-col mt-2 text-white items-center" >


                    <div className=" h-4/5 mx-12 flex w-10/12 md:justify-between">
                        <div className=" w-4/5 md:w-3/5 lg:w-2/5  text-left flex flex-col mb-4">
                            <div className="-ml-1">
                                <img src="/assets/logo-white.png" alt="Image"></img>
                            </div>
                            <div className="my-6 flex justify-between text-white w-3/5 lg:w-5/12 xl:w-3/12 items-center">
                                <GrInstagram size={20} />
                                <FaFacebookF size={20} />
                                <FaYoutube size={30} />
                            </div>
                            <NewsletterDialog/>
                            
                            <div className="lg:hidden flex w-10/12 text-pretty mt-10">
                                At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide.
                            </div>
                        </div>
                        <div className=" lg:w-3/5 w-1/5 flex justify-between select-none">
                            <div className="hidden lg:flex w-3/6 mt-10">
                                At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide.
                            </div>
                            <div className="   lg:w-2/6 grid grid-rows-4 text-center text-slate-300">
                                <div className="  cursor-not-allowed">Clients</div>
                                <div className="  cursor-not-allowed">Career</div>
                                <div className="  cursor-not-allowed">CSR</div>
                                <div className="  cursor-not-allowed">FAQs</div>
                            </div>
                        </div>


                    </div>
                    <div className="flex flex-col items-center w-11/12 pb-2">
                        <Separator className="my-3 w-full opacity-55" />
                        <div className=" flex  lg:flex-row flex-col items-center text-white  text-center font-light text-xs w-full lg:justify-between">

                            <div className=" text-center lg:text-left  h-1/5 opacity-90 pb-2 w-1/2 lg:pl-4 lg:py-0 py-4">Copyright @2024 Hawk Aerospace </div>
                            <div className=" lg:w-1/3 w-full flex  justify-evenly lg:py-0 py-4 ">
                                <div className="opacity-90">Privacy Policy</div>
                                <div className="opacity-90">Terms & Conditions</div>
                                <div className="opacity-90">Cancellation Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}