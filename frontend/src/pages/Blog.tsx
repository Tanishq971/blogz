import { useBlog } from "../hooks/blogHook";
import {useParams} from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/BlogSkelecton";
const Blog = () => {
    const {id} = useParams<{id:string}>();
    
    if (!id) {
     return <div>Invalid blog ID</div>; 
    }
    //  console.log(id)
    const {loading , blog} = useBlog({id}); 

    if(loading) {
        return <FullBlogSkeleton/>
    }
    
    if(!blog){
        return <div>Blog not found</div>; 
    }
    return <div>
        <FullBlog blog={blog}  />
    </div>;
}



export default Blog;