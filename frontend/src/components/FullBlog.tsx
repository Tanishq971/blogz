import { blogStructure } from "../hooks/blogHook";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";
const FullBlog = ({ blog }: { blog: blogStructure }) => {
  // console.log(blog);
  // console.log(blog.title);
  
  return (
    <div>
      <Appbar></Appbar>
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full pt-[73px] max-w-screen-xl">
        <div className="col-span-8 p-4 shadow-left-lg">
          <div className="text-5xl font-bold text-black">
            {blog.title}
          </div>
          <div className="text-slate-500 pt-2">Posted on 2nd december 2023</div>
          <div className="pt-2">{blog.content}</div>
        </div>

        <div className="grid-cols col-span-4 h-screen shadow-right-lg border-l-2">
          <div className="p-5">
          Author

          
          <div className="text-xl font-bold flex gap-3 items-center pt-4 ">
          <Avatar  authorName={blog.author?.name || "Anonymus"} size="big" />
          {blog.author?.name || "Unknown author"}
 
          </div>
          <div className="text-slate-700  pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in ducimus porro! Doloremque, cum. Eveniet et dicta sequi dolorum rem accusamus saepe corrupti totam fugiat neque? Quidem consectetur officia tenetur!
          </div>
    
      </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default FullBlog;


