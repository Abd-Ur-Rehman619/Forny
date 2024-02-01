import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="p-4 text-black border-b flex justify-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Your Logo</div>

          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </nav>

          <div className="md:flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F5F5F5] text-white p-2 rounded-md focus:outline-none"
            />

            <Link to="/signup" className="ml-4 hover:text-gray-300">
              SignUp
            </Link>
            <Link to="/login" className="ml-2 hover:text-gray-300">
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
