import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import Newsletter from "./newsletter";



export default function SiteMap(){
    return (
        <>
            <div className="w-full bg-dark  overflow-none pt-10 flex flex-col mt-2 text-white" >


                <div className=" h-4/5 mx-12 flex w-5/5">
                    <div className="w-6/12  text-left flex flex-col justify-between">
                        <div>
                            Logo
                        </div>
                        <div className="flex text-sm">
                            <span className=" mr-2">

                                <FaLocationDot size={20} />
                            </span>
                            Enam Sambhav, C-20, G Block Rd, Bandra Kurla Complex, Mumbai, Maharashtra 400051
                        </div>
                        <div className="flex text-sm">
                            <span className="mr-2">
                                <IoMail size={20} />
                            </span>
                            mail@hawkaerospace.in
                        </div>
                        <div className="flex text-sm">
                            <span className="mr-2">
                                <GiRotaryPhone size={20} />
                            </span>
                            +91 9819663183
                        </div>
                    </div>
                    <div className="w-6/12  text-right pb-5 flex flex-col">
                    <Newsletter/>
                        <table className="table-fixed w-full">
                            <thead>
                                <tr className="font-black">
                                    <th>Company</th>
                                    <th>Products</th>
                                    <th>Resources</th>
                                </tr>
                            </thead>
                            <tbody className=" text-sm opacity-90">
                                <tr>
                                    <td>About Us</td>
                                    <td>
                                        Hawk4G® Surveillance
                                    </td>
                                    <td>Blog</td>
                                </tr>
                                <tr>
                                    <td>Technology</td>
                                    <td>
                                        Hawk4G® Survey
                                    </td>
                                    <td>WhitePapers</td>
                                </tr>
                                <tr>
                                    <td>Applications</td>
                                    <td>
                                        NextCC
                                    </td>
                                    <td>Contact Us</td>
                                </tr>
                                <tr>
                                    <td>FAQs</td>
                                    <td>
                                        Launchpad</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Careers</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    
                    <Separator className="my-3 w-11/12 opacity-55" />
                    <div className=" text-white  text-center h-1/5 font-light text-sm opacity-90 pb-2">Copyright @2024 Hawk Aerospace </div>
                </div>
            </div>
        </>
    )
}