import { Link } from "react-router-dom";
import { useState } from "react";
import { SigninInput, SingupInput } from "@tanishqdev/medium-common";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const [postInput, setPostInput] = useState<SingupInput>({
    name: "",
    email: "",
    password: "",
  });
 const url = BACKEND_URL
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8787/api/v1/user/${type}`,
        postInput
      );

      console.log(response)
      const jwt = await response.data;
      console.log("Hello")
      console.log(jwt)
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.log(e);
      alert("Error Occured");
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex flex-col justify-center items-center gap-3 ">
        <div>
          <div className="text-3xl font-extrabold">Create an account</div>
          <div></div>{" "}
          <div className="text-slate-400">
            Already have an account?
            <Link
              className="pl-2 underline"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              {type === "signup" ? "Signin" : " Signup"}
            </Link>
          </div>
        </div>
        <div className="w-[40%]">
          {" "}
        {type === "signup" &&  <LabelledInput
            label="Name"
            placeholder="Tanishq...."
            onChange={(e) => {
              setPostInput({ ...postInput, name: e.target.value });
            }}
          />}
          <LabelledInput
            label="Email"
            type="email"
            placeholder="abc@gmail.com"
            onChange={(e) => {
              setPostInput({ ...postInput, email: e.target.value });
            }}
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="xyz"
            onChange={(e) => {
              setPostInput({ ...postInput, password: e.target.value });
            }}
          />
          <button
            type="submit"
            onClick={sendRequest}
            className="w-full mt-5 text-white bg-slate-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {type === "signin" ? "SignIn" : "Signup"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface labelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: any) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: labelledInputType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 text-gray-600">
          {label}
        </label>
        <input
          onChange={onChange}
          placeholder={placeholder}
          id="large-input"
          type={type || "text"}
          className="block w-full p-3  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
}

export default Auth;
