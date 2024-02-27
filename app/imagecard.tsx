

export default function ImageCard(props: {
    image: string,
    content: string,
    heading: string,

}) {
    return (
        <>
            <div className="aspect-auto w-full p-0 rounded-2xl overflow-hidden group  scale-75 group hover:shadow-lg flex flex-col  pb-16 transition-all duration-700  ease-in-out">
                <img src={props.image} className="scale-110 object-cover group-hover:scale-125
                transition-all duration-700  ease-in-out  aspect-auto h-3/5 -z-10 "/>
                <div className="flex items-center flex-col p-6 -m-20 z-20 h-full  bg-sky-300 group-hover:bg-cyan-200 transition-all duration-700 ease-in-out">
                    <h1 className="text-6xl font-semibold text-slate-800/90 group-hover:text-black">{props.heading}</h1>
                    <div className='p-3  w-3/4 text-center  mt-4 text-pretty opacity-90 group-hover:opacity-100 text-xl'>{props.content}</div>
                </div>
            </div>
        </>
    )
}