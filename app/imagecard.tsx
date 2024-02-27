

export default function ImageCard(props: {

    content: string,
    heading: string,

}) {
    return (
        <>
            <div className="aspect-auto w-full p-0 rounded-2xl overflow-hidden group  bg-sky-200 scale-75 group hover:shadow-lg">
                <img src="/assets/agri.jpg" className=" group-hover:scale-105
                 transition-all duration-300 ease-in-out"/>
                <div className="flex justify-center items-center flex-col p-6">
                    <h1 className="text-6xl font-semibold text-slate-700">{props.heading}</h1>
                    <div className='p-3 text-center text-xl mt-4 text-ellipsis'>{props.content}</div>
                </div>
            </div>
        </>
    )
}