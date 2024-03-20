import { SkeletonDemo } from "./skeleton"
import { SkeletonDemo2 } from "./skeleton2"
import { Separator2 } from "./layout"

export default function Dummy(props: {
    text : string
}) {
    return (<>
        {Separator2}
        <div className=" pt-10">

        <h1 className=" text-center text-6xl font-semibold  ">{props.text}</h1>
        <SkeletonDemo />
        <div className=" -mt-32 ">
        <SkeletonDemo2 />
        </div>
        </div>
    </>)
}

