import styles from "./signup.module.css";
import signupImg from "../../assets/authPic.png";
import { Button, Input } from "@mui/material";
import googleIcon from "../../assets/Icon-Google.png";

export default function Signup() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={signupImg} alt="signup Img" />
        </div>

        <form className={styles.form}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <div className={styles.inputs}>
            <Input type="text" className={styles.name} placeholder="Name" />
            <Input
              type="text"
              className={styles.email}
              placeholder="Email or Phone Number"
            />
            <Input
              type="password"
              className={styles.password}
              placeholder="Password"
            />
          </div>

          <div className={styles.primaryBtns}>
            <div className={styles.createBtn}>
              <Button>Create Account</Button>
            </div>

            <div className={styles.googleBtn}>
              {/* <img src={googleIcon} /> */}
              <Button>
                <img src={googleIcon} />
                Sign Up with Google
              </Button>
            </div>
          </div>
          <div className={styles.footerBtn}>
            <Button>Already have account?</Button>
            <Button>Log in</Button>
          </div>
        </form>
      </div>
    </>
  );
}
