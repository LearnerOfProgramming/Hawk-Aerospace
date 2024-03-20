import { Outfit } from "next/font/google"

export const outfit = Outfit({ subsets: ["latin"], weight: "300" })

export default function Stats() {
    return (<>
        <div className=" lg:w-10/12 w-3/4 md:w-4/6  py-8 text-xl lg:text-2xl font-semibold bg-secondary rounded-2xl  z-20 -mt-32">
            <div className="flex lg:flex-row flex-col  justify-evenly  text-white">
                <div className="flex  w-full lg:w-1/2 justify-between">

                    <div className="flex flex-col border-r-2 w-full">
                        <h2 className="flex justify-center pb-4 md:text-6xl text-5xl lg:text-7xl ">
                            7
                        </h2>
                        <div className={outfit.className}>

                            <h2 className=" text-center">
                                Total No. of
                            </h2>
                            <h2 className=" text-center">
                                Flights
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col lg:border-r-2 w-full">
                        <h2 className="flex justify-center pb-4 md:text-6xl text-5xl lg:text-7xl">
                            2
                        </h2>
                        <div className={outfit.className}>
                            <h2 className=" text-center">
                                Total No. of
                            </h2>
                            <h2 className=" text-center">
                                Projects
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 lg:mt-0 mt-10 justify-between">
                    <div className="flex flex-col border-r-2 w-full">

                        <h2 className="flex justify-center pb-4 md:text-6xl text-5xl lg:text-7xl">
                            10k+
                        </h2>
                        <div className={outfit.className}>
                            <h2 className=" text-center">
                                Drone
                            </h2>
                            <h2 className=" text-center">
                                Demos
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <h2 className="flex justify-center pb-4 md:text-6xl text-5xl lg:text-7xl">
                            260+
                        </h2>
                        <div className={outfit.className}>
                            <h2 className=" text-center">
                                Pilots
                            </h2>
                            <h2 className=" text-center">
                                Registered
                            </h2>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    </>)
}