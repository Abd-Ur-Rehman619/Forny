import styles from "./login.module.css";
import signupImg from "../../assets/authPic.png";
import { Button, Input } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const storedUser = JSON.parse(localStorage.getItem("users")) || [];

  const handleLogin = () => {
    const foundUser = storedUser.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      navigate("/");
    } else {
      setError("Incorrect email or password");
    }
  };

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
              type="email"
              className={styles.email}
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              className={styles.password}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.primaryBtns}>
            <div className={styles.loginBtn}>
              <Button onClick={handleLogin}>Log in</Button>
            </div>

            <div className={styles.forgetBtn}>
              <Button>Forget Password?</Button>
            </div>
          </div>

          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </>
  );
}
