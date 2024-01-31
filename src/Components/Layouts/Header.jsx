export default function Header() {
  return (
    <>
      <header className="p-4 text-black border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Your Logo</div>

          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </nav>

          <div className="md:flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F5F5F5] text-white p-2 rounded-md focus:outline-none"
            />

            <a href="#" className="ml-4 hover:text-gray-300">
              SignUp
            </a>
            <a href="#" className="ml-2 hover:text-gray-300">
              Login
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
