import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
const Appbar = () => {
    return <div className="">
      <div  className="border-b flex justify-between px-10 py-4 fixed w-full bg-slate-200 bg-opacity-55 backdrop-blur-md ">
      <Link to={'/'} className="font-semibold from-neutral-700 font-serif text-lg">
          Medium
        </Link>
        <div>
        <Link to={'/publish'}>
        <button type="button" className="text-white bg-green-900 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2 mr-6">Publish</button>
        </Link>
          <Avatar size = "big" authorName="Tanishq"></Avatar>
        </div>
     </div> 
    </div>;
}

export default Appbar;