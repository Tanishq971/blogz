import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect } from "react";

export interface blogStructure{
    id:string ,
    title:string | "",
    content:string | "",
    author:{
        name:string | null,
    } | null,
}
const blogHook = () => {
    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState<blogStructure[]>([]);
    
    useEffect(() => {
        axios
            .get(`${BACKEND_URL}api/v1/blog/bulk`, {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            })
            .then((response) => {
            
                // console.log("API Response:", response.data);
                setBlogs(response.data.all || []); // Ensure 'all' key is used
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            });
    }, []);
    

    return {
        loading , blogs
    };
}

export const useBlog = ({id } : {id:string})=>{
    const [loading , setLoading] = useState(true);
    const [blog , setBlog]  = useState<blogStructure>();
    useEffect(()=>{
        axios.get(`${BACKEND_URL}api/v1/blog/${id}` , {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        }).then(response =>{
            setBlog(response.data.blog)
            console.log(response.data.blog);
            setLoading(false)
        }).catch(error =>{
            console.error("Error fetching blog:", error);
            setLoading(false);
        })
    } , []);

    return {
        loading , blog
    }
}


export default blogHook;