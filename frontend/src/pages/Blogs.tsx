import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import blogHook from "../hooks/blogHook";
import BlogSkelecton from "../components/BlogSkelecton";

const Blogs = () => {
  const { loading, blogs } = blogHook();

  if (loading) {
    return (
      <div className="flex justify-center w-screen">
        <div className="flex flex-col justify-center w-full max-w-xl gap-3 mt-28">
          {/* <Appbar /> */}
          <BlogSkelecton />
          <BlogSkelecton />
          <BlogSkelecton />
          <BlogSkelecton />
       ]
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-20">
      <Appbar />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-full max-w-xl gap-3 cursor-pointer">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              key={blog.id} // Always include a unique key when rendering lists
              title={blog.title || "Untitled"}
              content={
                "How an ugly single page website makes $5000 without affiliate marketing How an ugly single page website makes $5000 without affiliate marketing"
              }
              publishedDate="2nd Feb"
              authorName={blog.author?.name || "No name"} // Use optional chaining to safely access author.name
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
