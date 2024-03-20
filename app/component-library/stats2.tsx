import { MdOutlineAccessTime } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbFileReport } from "react-icons/tb";

export default function Stats2() {
    return (<>
        <div className="flex flex-col lg:flex-row lg:justify-around w-11/12 py-32 text-xl lg:text-2xl font-semibold border-b-2 border-primary scale-90 md:scale-100">
            
            
            <div className="flex pb-4 lg:w-1/2">
                    <div className="flex flex-col w-1/2">
                        <div className="flex justify-center pb-6 text-secondary ">
                            <IoIosTime size={100} />
                        </div>
                        <h2 className=" text-center">
                            1000+ Hours
                        </h2>
                        <h2 className=" text-center">
                            Trained
                        </h2>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="flex justify-center pb-6 text-secondary">
                            <FaAward size={100} />
                        </div>
                        <h2 className=" text-center">
                            Premium
                        </h2>
                        <h2 className=" text-center">
                            Services
                        </h2>
                    </div>
            </div>
            <div className="flex justify-around lg:w-1/2 ">

                    <div className="flex flex-col w-1/2 ">
                        <div className="flex justify-center pb-6 text-secondary">
                            <FaPeopleGroup size={100} />
                        </div>
                        <h2 className=" text-center">
                            50+
                        </h2>
                        <h2 className=" text-center">
                            Employees
                        </h2>
                    </div>
                    <div className="flex flex-col  w-1/2">
                        <div className="flex justify-center pb-6 text-secondary">
                            <TbFileReport size={100} />
                        </div>
                        <h2 className=" text-center">
                            200+ 
                        </h2>
                        <h2 className=" text-center">
                        Surveillance
                        </h2>
                        <h2 className=" text-center">
                            Reports
                        </h2>

                    </div>

            </div>
                </div>
    </>)
}