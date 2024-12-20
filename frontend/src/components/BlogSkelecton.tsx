
import Appbar from "./Appbar";

const BlogSkelecton = () => {
    return (
      <div role="status" className="animate-pulse">
        <div className="pl-5 pt-2">
          <div className="flex gap-3">
            <div className="flex flex-col justify-center">
              <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-16 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="h-1 w-1 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-20 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="mt-2 h-6 bg-gray-200 rounded max-w-[330px]"></div>
          <div className="mt-2 h-4 bg-gray-200 rounded max-w-[330px]"></div>
          <div className="mt-2 h-4 bg-gray-200 rounded max-w-[200px]"></div>
          <div className="mt-2 h-4 bg-gray-200 rounded max-w-[150px]"></div>
          <div className="bg-slate-600 h-1 opacity-10 mt-2"></div>
        </div>
      </div>
    );
  };
  
  export default BlogSkelecton;


export const FullBlogSkeleton = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-[73px] max-w-screen-xl animate-pulse">
          {/* Main Blog Content */}
          <div className="col-span-8 p-4 shadow-left-lg">
            <div className="h-10 bg-gray-200 rounded-md mb-4"></div>
            <div className="h-6 bg-gray-200 rounded-md w-1/3 mb-4"></div>
            <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
          </div>

          {/* Author Section */}
          <div className="col-span-4 h-screen shadow-right-lg border-l-2">
            <div className="p-5">
              <div className="h-6 bg-gray-200 rounded-md mb-4 w-20"></div>
              <div className="flex gap-3 items-center pt-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="h-6 bg-gray-200 rounded-md w-1/3"></div>
              </div>
              <div className="mt-4">
                <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export const PublishSkeleton = () => {
  return (
    <div>
      <Appbar />
      <div className="pt-[100px] max-w-screen-lg mx-auto flex flex-col items-center justify-center animate-pulse">
        {/* Title Input Skeleton */}
        <div className="bg-gray-200 h-10 w-full rounded-lg mb-4"></div>

        {/* Text Editor Skeleton */}
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="mb-4">
            <div className="bg-gray-200 h-6 w-1/4 rounded-lg mb-4"></div>
            <div className="bg-gray-200 h-48 w-full rounded-lg"></div>
          </div>
        </div>

        {/* Publish Button Skeleton */}
        <div className="flex justify-center">
          <div className="mt-4 bg-gray-200 h-10 w-40 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};




  