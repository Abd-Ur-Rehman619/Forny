import styles from "./login.module.css";
import signupImg from "../../assets/authPic.png";
import { Button, Input } from "@mui/material";

export default function Login() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={signupImg} alt="signup Img" />
        </div>

        <form className={styles.form}>
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <div className={styles.inputs}>
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
            <div className={styles.loginBtn}>
              <Button>Log in</Button>
            </div>

            <div className={styles.forgetBtn}>
              <Button>Forget Password?</Button>
            </div>
          </div>
<<<<<<< HEAD
=======
          {error && <p className={styles.error}>{error}</p>}
>>>>>>> dcee4c5f6c6d54df410728ed6fdba4cbf72a88f8
        </form>
      </div>
    </>
  );
}
