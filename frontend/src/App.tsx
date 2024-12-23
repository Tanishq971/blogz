import { BrowserRouter , Routes , Route } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Blogs from "./pages/Blogs"
import Blog from "./pages/Blog"
import Publish from "./components/Publish"
import Home from "./pages/Home"

function App() {
 

  return (
    <>
    <div>

    </div>
      <BrowserRouter >
         <Routes>
          <Route path= "/signup" element={<Signup/>}/>
          <Route path= "/signin" element = {<Signin/>}/>
          <Route path= "/blog/:id" element = {<Blog/>}/>
          <Route path= "/blogs" element = {<Blogs/>}/>
          <Route path="/publish" element = {<Publish/>}/>
          <Route path="/" element={<Home/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}




export default App
