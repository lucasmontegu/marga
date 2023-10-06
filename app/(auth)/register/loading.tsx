import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
    </div>
  )
};

export default Loading;
