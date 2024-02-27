import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4 h-96 px-10 ">
      <Skeleton className="h-1/2 w-5/12 rounded-full" />
      <div className="space-y-2 h-1/2 w-full ">
        <Skeleton className="h-1/2 w-full rounded-xl" />
        <Skeleton className="h-1/2 w-1/2 rounded-lg" />
      </div>
    </div>
  )
}
