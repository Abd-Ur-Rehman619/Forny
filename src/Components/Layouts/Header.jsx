import { Link, NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Icon from "../../assets/icon.png";
import Cart from "../../assets/Cart.png";
import Wishlist from "../../assets/Wishlist.png";
import user from "../../assets/user.png";
import styles from "../StylingFiles/header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLog } from "../../store/cartSlice";
export default function Header() {
  const Log = useSelector((state) => state.log);
  const dispatch = useDispatch();
  function logoutHandler() {
    localStorage.removeItem("token");
    dispatch(changeLog());
  }
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
            {Log === false ? (
              <>
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
              </>
            ) : (
              <button onClick={logoutHandler} className={styles.navLinks}>
                LogOut
              </button>
            )}
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
            {Log && (
              <Link to="/wishlist" className={styles.cartWishLinks}>
                <IconButton>
                  <img src={user} alt="Custom Icon" />
                </IconButton>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
