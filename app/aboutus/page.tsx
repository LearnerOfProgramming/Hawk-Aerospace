import ImageCard from "../component-library/imagecard";
import RegularCard from "../component-library/regularcard";
import Stats2 from "../component-library/stats2";
import Dummy from "../dummy";
import { Separator2, rajdhani } from "../layout";
import { SkeletonDemo } from "../skeleton";
import { SkeletonDemo2 } from "../skeleton2";
import { outfit } from "../stats";

export default function AboutUs() {
    return (<>
        <div className="w-full flex flex-col items-center justify-around">

            <div className="w-full pt-10 flex flex-col items-center h-screen ">
                {Separator2}
                <div className="mt-4 sm:mt-0 w-11/12 sm:w-10/12 h-1/2 text-base sm:text-lg lg:text-xl xl:text-2xl flex flex-col justify-around">

                    <h1 className="text-center text-3xl font-bold text-secondary py-2 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Hawk Aerospace</h1>
                    <div className={outfit.className}>

                        <p className="text-center font-semibold py-2 ">At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide. We strive to  revolutionize aerial solutions through cutting-edge design , precision engineering, and advanced automation.</p>
                    </div>
                    <div className={outfit.className}>
                        <p className="text-center font-semibold py-2 mb-4 ">Our focus is on revolutionizing agriculture through advanced drone technology tailored specifically for crop surveillance. Our mission is to empower farmers with precise, efficient, and data-driven solutions, that optimize crop health and maximize yields.  .</p>
                    </div>
                </div>

                <div className="flex flex-col relative  w-full h-1/2 bg-secondary z-30 mt-4 sm:mt-0">
                    <img src="/assets/aboutus/bg-pic.png" className="w-full h-full object-cover opacity-60" />
                    <div className=" absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center w-full -mt-4">
                        <div className="flex lg: justify-center lg:flex-row flex-col items-center">

                            <img src="/assets/aboutus/hawk-white-logo.png" className=" h-auto w-5/12 sm:w-72  lg:w-80 lg:-mb-12 " />


                            <div className="text-white text-4xl text-center font-semibold sm:text-5xl md:text-6xl lg:text-7xl   flex items-center w-auto justify-center"><p className="w-4/5">
                                The Drones : Our Driving Force
                            </p>
                            </div>
                        </div>


                    </div>
                    <img src="/assets/aboutus/drone1.png" className="h-auto w-36 md:w-48 z-40 absolute right-0 top-full -mt-10 " />
                </div>


            </div>

            <div className="w-full px-10 text-left text-pretty flex flex-col md:flex-row-reverse  mt-20 md:mt-24 lg:mt-28 lg:items-center ">
                <div className="md:px-10 md:w-3/5 xl:w-9/12">

                    <h1 className="text-secondary font-bold text-3xl lg:text-4xl" >Our Story</h1>
                    <div className={outfit.className}>
                        <div className=" font-semibold lg:text-xl ">

                            <p className="py-1">At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide. We strive to  revolutionize aerial solutions through cutting-edge design , precision engineering, and advanced automation.</p>
                            <p className="py-1">Our focus is on revolutionizing agriculture through advanced drone technology tailored specifically for crop surveillance. Our mission is to empower farmers with precise, efficient, and data-driven solutions, that optimize crop health and maximize yields.  </p>
                        </div>
                    </div>
                </div>
                <div className=" aspect-auto w-full rounded-t-xl overflow-hidden group h-fit md:h-fit mt-4 md:w-2/5 xl:w-3/12">
                    <img alt="Image" src="/assets/aboutus/man-field.jpg" className=" group-hover:scale-110 transition-all duration-700 ease-out" />
                </div>
            </div>

            <div className=" relative mt-20  w-full flex justify-center xl:text-xl">
                <img src="/assets/aboutus/line1.png" alt="Image" className=" hidden xl:block xl:absolute xl:w-1/2 xl:-mt-20  2xl:w-1/2 3xl:w-1/2 xl:h-4/5   4xl:w-1/2  xl:-z-20 "/>
                <div className="border-t-2 border-primary/90 w-11/12 py-6">

                    <div className="flex w-full  mt-4 items-center py-6">
                        <div className="w-2/3">
                            <h1 className=" text-secondary font-bold text-3xl">Our Vision</h1>
                            <div className={outfit.className}>

                                <p className=" font-medium xl:w-3/5">At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide. We strive to  revolutionize aerial solutions through cutting-edge design , precision engineering, and advanced automation.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 xl:flex xl:justify-start ">
                            <img src="/assets/aboutus/drone11.png" className="w-auto h-36 xl:h-80" />
                            </div>

                    </div>

                    <div className="flex w-full mt-4 flex-row-reverse  items-center text-right py-6">
                        <div className="w-2/3">
                            <h1 className=" text-secondary font-bold text-3xl">Our Mission</h1>
                            <div className={outfit.className}>
                                <div className="xl:flex xl:justify-end">
                                    
                                <p className=" font-medium xl:w-3/5">At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide. We strive to  revolutionize aerial solutions through cutting-edge design , precision engineering, and advanced automation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 xl:flex xl:justify-end ">
                        <img src="/assets/aboutus/drone12.png" className="w-auto h-28 xl:h-60" />
                        </div>

                    </div>

                    <div className="xl:relative flex w-full mt-4 items-center py-6">
                        <div className="w-2/3">
                            <h1 className=" text-secondary font-bold text-3xl">Our Values</h1>
                            <div className={outfit.className}>

                                <p className=" font-medium xl:w-3/5">At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide. We strive to  revolutionize aerial solutions through cutting-edge design , precision engineering, and advanced automation.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 xl:flex xl:justify-start ">

                        <img src="/assets/aboutus/drone13.png" className="w-auto h-40 xl:h-96 xl:-mb-10" />
                        </div>

                    </div>
                </div>
                <img src="/assets/aboutus/line2.png" alt="Image" className=" hidden xl:block xl:absolute   xl:w-1/2 2xl:w-1/2  3xl:w-1/2 4xl:w-1/2 xl:h-4/5 2xl:h-4/5  xl:-z-20 xl:mt-80 xl:ml-14 "/>
            </div>
            <div className="w-full flex flex-col items-center ">
                <div className="border-primary border-t-2 mt-10 pt-14 w-11/12">
                    <div className={outfit.className}>

                        <h1 className="  font-semibold text-3xl text-secondary  text-center ">Our</h1>
                        <div className={rajdhani.className}>

                            <h1 className="  font-semibold text-7xl   text-center pt-4 ">GOALS</h1>
                        </div>
                        <p className="text-center pt-3 text-xl" >
                            all projects that we have already done , proven can help to use more comfortable,
                            then can used by client from our business
                        </p>

                    </div>
                </div>


                <Stats2 />

            </div>


            <div className="w-full flex flex-col items-center ">
                <div className="mt-10 pt-4 w-11/12">
                    <div className={outfit.className}>

                        <h1 className="  font-semibold text-3xl xl:text-4xl text-secondary  text-center ">Meet</h1>
                        <div className={rajdhani.className}>

                            <h1 className="  font-semibold text-5xl xl:text-6xl  text-center pt-4 ">OUR TEAM</h1>
                        </div>

                    </div>
                    <div className={outfit.className}>

                        <div className="grid grid-cols-2 gap-10 lg:gap-14 md:grid-cols-3 xl:grid-cols-4 mt-10 text-center text-white text-base md:text-lg xl:text-xl ">
                            <div className="flex flex-col">
                                <img src="/assets/aboutus/member.jpg" alt="Image" className="aspect-square " />
                                <div className="bg-dark">
                                    <h1 className="text-xl sm:text-2xl font-semibold xl:text-3xl">David Simpson</h1>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <img src="/assets/aboutus/member.jpg" alt="Image" className="aspect-square " />
                                <div className="bg-dark">
                                    <h1 className="text-xl sm:text-2xl font-semibold xl:text-3xl">David Simpson</h1>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <img src="/assets/aboutus/member.jpg" alt="Image" className="aspect-square " />
                                <div className="bg-dark">
                                    <h1 className="text-xl sm:text-2xl font-semibold xl:text-3xl">David Simpson</h1>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <img src="/assets/aboutus/member.jpg" alt="Image" className="aspect-square " />
                                <div className="bg-dark">
                                    <h1 className="text-xl sm:text-2xl font-semibold xl:text-3xl">David Simpson</h1>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <img src="/assets/aboutus/member.jpg" alt="Image" className="aspect-square " />
                                <div className="bg-dark">
                                    <h1 className="text-xl sm:text-2xl font-semibold xl:text-3xl">David Simpson</h1>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <img src="/assets/aboutus/member.jpg" alt="Image" className="aspect-square " />
                                <div className="bg-dark">
                                    <h1 className="text-xl sm:text-2xl font-semibold xl:text-3xl">David Simpson</h1>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <img src="/assets/aboutus/member.jpg" alt="Image" className="aspect-square " />
                                <div className="bg-dark">
                                    <h1 className="text-xl sm:text-2xl font-semibold xl:text-3xl">David Simpson</h1>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <img src="/assets/aboutus/member.jpg" alt="Image" className="aspect-square " />
                                <div className="bg-dark">
                                    <h1 className="text-xl sm:text-2xl font-semibold xl:text-3xl">David Simpson</h1>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}