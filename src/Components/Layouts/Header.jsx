import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Icon from "../../assets/icon.png";
import Cart from "../../assets/Cart.png";
import Wishlist from "../../assets/Wishlist.png";
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
            <Link to="/signup" className="ml-4 hover:text-gray-300">
              SignUp
            </Link>
            <Link to="/login" className="ml-2 hover:text-gray-300">
              Login
            </Link>
          </nav>

          <div className="md:flex items-center">
            <TextField
              hiddenLabel
              size={"small"}
              className="bg-[#F5F5F5]"
              placeholder="What are you looking for?"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <img
                      src={Icon}
                      alt="Custom Icon"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </IconButton>
                ),
              }}
            />
            <Link to="/cart" className="ml-4 hover:text-gray-300">
              <IconButton>
                <img src={Cart} alt="Custom Icon" />
              </IconButton>
            </Link>
            <Link to="/wishlist" className="ml-2 hover:text-gray-300">
              <IconButton>
                <img src={Wishlist} alt="Custom Icon" />
              </IconButton>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
