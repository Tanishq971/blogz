import Appbar from "./Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");//same name sei hona chahiye
    const navigate = useNavigate();

  return (
    <div>
      <Appbar />
      <div className="pt-[100px] max-w-screen-lg mx-auto flex flex-col items-center justify-center">
        <input
          type="text" onChange={(e)=>setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Title ...."
        />
        <TextEditor onChange = {e =>{
            setDescription(e.target.value)
  
        }}/>
        <div className="flex justify-center">
          <button onClick={async()=>{
           const response = await axios.post(`${BACKEND_URL}api/v1/blog` , {
               title, 
               content:description
            } , {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            })
            navigate(`/blog/${response.data.id}`);
          }} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium rounded-lg py-2 px-4 w-40">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({onChange} : {onChange : (e : any)=>void}) {
  return (
    <form className="w-full max-w-screen-lg mx-auto">
      <div className="mb-4">
        <label className="block text-xl font-bold text-gray-600  p-4">
          Publish post
        </label>
        <textarea onChange={onChange} 
          rows={8}
          id="editor"
          className="w-full p-2.5 h-48 text-gray-900 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
          placeholder="Write your blog here..."
        ></textarea>
      </div>
    </form>
  );
}

export default Publish;
