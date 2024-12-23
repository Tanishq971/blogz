import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white shadow-md p-4">
        <div className="text-2xl font-bold text-blue-500">
          <Link to="/">Medium</Link>
        </div>
        <div className="space-x-4">
          <Link to="/signin" className="text-gray-600 hover:text-blue-500 transition">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4 animate-fadeIn">
          Welcome to Medium
        </h1>
        <p className="text-lg text-gray-600 mb-6 animate-slideUp">
          Discover the world of knowledge
        </p>
        <Link to="/signin">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition animate-pulse">
            Start reading
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
