import { Link } from "react-router-dom";
interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="pl-5 pt-2">
        <div className="flex gap-3 p-l">
          <div className="flex flex-col justify-center">
            <Avatar size="small" authorName={authorName}></Avatar>
          </div>
          <div className=" text-slate-600 font-semibold font-sm text-sm text-center flex items-center">
            {authorName}
          </div>
          <div className="flex flex-col justify-center">
            <Dot></Dot>
          </div>
          <div className="flex justify-center text-left text-slate-500 font-bold text-sm ">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold text">{title}</div>
        <div>{content.slice(0, 100) + "..."}</div>
        <div className="text-sm font-thin textslate-500">
          {`${Math.ceil(content.length / 100)} min read`}
        </div>
        <div className="bg-slate-600 h-1 opacity-10 mt-2	"></div>
      </div>
    </Link>
  );
};

function Dot() {
  return (
    <span className="flex items-center w-1 h-1  bg-slate-100 rounded-full dark:bg-slate-300"></span>
  );
}

export function Avatar({
  authorName,
  size = "small",
}: {
  authorName: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-4 h-4" : "w-10 h-10"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 border border-slate-950 `}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-lg"
        } text-gray-600 dark:text-gray-300`}
      >
        {authorName[0]}
      </span>
    </div>
  );
}
export default BlogCard;
