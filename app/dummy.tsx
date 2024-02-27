import { SkeletonDemo } from "./skeleton"
import { SkeletonDemo2 } from "./skeleton2"


export default function Dummy(props: {
    text : string
}) {
    return (<>
        <h1 className=" text-center text-6xl mt-10 font-semibold">{props.text}</h1>
        <SkeletonDemo />
        <div className=" -mt-32 ">
        <SkeletonDemo2 />
        </div>
    </>)
}

