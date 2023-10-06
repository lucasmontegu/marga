import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  )
};

export default Loading;
