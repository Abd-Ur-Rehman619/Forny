import { Link } from "react-router-dom";
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
            <Link to="/" className={styles.navLinks}>
              Home
            </Link>
            <Link to="/contact" className={styles.navLinks}>
              Contact
            </Link>
            <Link to="/about" className={styles.navLinks}>
              About
            </Link>
            <Link to="/signup" className={styles.navLinks}>
              SignUp
            </Link>
            <Link to="/login" className={styles.navLinks}>
              Login
            </Link>
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
