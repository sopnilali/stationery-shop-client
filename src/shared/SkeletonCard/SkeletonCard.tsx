import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonCard() {
  return (
    <div className="flex justify-center items-center">
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  )
}