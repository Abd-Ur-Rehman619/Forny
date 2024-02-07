import { Link, NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Icon from "../../assets/icon.png";
import Cart from "../../assets/Cart.png";
import Wishlist from "../../assets/Wishlist.png";
import styles from "../StylingFiles/header.module.css";
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.dashboardDiv}>
          <div className={styles.navDiv}>FORNY</div>

          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLinks
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLinks
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLinks
              }
            >
              About
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLinks
              }
            >
              SignUp
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLinks
              }
            >
              Login
            </NavLink>
          </nav>

          <div className={styles.textFieldDiv}>
            <TextField
              hiddenLabel
              size={"small"}
              className="bg-[#F5F5F5]"
              placeholder="What are you looking for?"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <img src={Icon} alt="Custom Icon" />
                  </IconButton>
                ),
              }}
            />
            <Link to="/cart" className={styles.cartWishLinks}>
              <IconButton>
                <img src={Cart} alt="Custom Icon" />
              </IconButton>
            </Link>
            <Link to="/wishlist" className={styles.cartWishLinks}>
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
