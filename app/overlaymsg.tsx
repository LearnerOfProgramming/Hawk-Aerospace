import Contactus from "./buttons/contactus";


export default function Overlaymsg() {
    return (<>
        <div className="w-11/12 h-screen absolute  flex  items-center">
            <div className=" w-5/12 h-3/5 rounded-3xl bg-black/50 mt-24 backdrop-blur-sm ">
                <div className="px-8 py-12  text-white">
                    <div className="py-2">

                        <h1 className=" text-7xl font-bold">The Drones </h1>
                        <h1 className=" text-7xl font-bold py-6">Our Driving Force</h1>
                    </div>
                    <div className="w-full text-xl pb-8">
                        At Hawk Aerospace, our mission is to pioneer the skies with innovative drone technology, empowering industries worldwide. We strive to revolutionize aerial solutions
                    </div>
                    <Contactus/>
                </div>
            </div>
        </div>
    </>)
}