import { MdOutlineAccessTime } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineWorkspacePremium } from "react-icons/md";

export default function Stats() {
    return (<>
        <div className=" w-10/12 pb-14 text-2xl font-semibold bg-secondary rounded-2xl  z-20 -mt-36">
            <div className="flex justify-evenly pt-10">

                <div className="flex flex-col">
                    <div className="flex justify-center pb-6">
                        <MdOutlineAccessTime size={100} />
                    </div>
                    <h2 className=" text-center">
                        1000+ Hours
                    </h2>
                    <h2 className=" text-center">
                        Trained
                    </h2>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center pb-6">
                        <MdOutlineWorkspacePremium size={100} />
                    </div>
                    <h2 className=" text-center">
                        Premium
                    </h2>
                    <h2 className=" text-center">
                        Services
                    </h2>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center pb-6">
                        <GrUserWorker size={100} />
                    </div>
                    <h2 className=" text-center">
                        50+
                    </h2>
                    <h2 className=" text-center">
                        Employees
                    </h2>
                </div>
                <div className="flex flex-col -mx-4">
                    <div className="flex justify-center pb-6">
                        <TbReportSearch size={100} />
                    </div>
                    <h2 className=" text-center">
                        200+ Surveillance
                    </h2>
                    <h2 className=" text-center">
                        Reports
                    </h2>

                </div>
            </div>

        </div>
    </>)
}