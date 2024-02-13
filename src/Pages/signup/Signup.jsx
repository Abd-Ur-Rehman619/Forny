import styles from "./signup.module.css";
import signupImg from "../../assets/authPic.png";
import { Button, Input } from "@mui/material";
import googleIcon from "../../assets/Icon-Google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleSignup = () => {
    if (!name) {
      setNameError("Name cannot be empty");
      return;
    }

    if (!email) {
      setEmailError("Email cannot be empty");
      return;
    }

    if (!password) {
      setPasswordError("Password cannot be empty");
      return;
    }

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setEmailError("This email is already in use");
      return;
    }

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/login");
  };

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
            <Input
              type="text"
              className={styles.name}
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {nameError && <p>{nameError}</p>}

            <Input
              type="email"
              className={styles.email}
              placeholder="Email or Phone Number*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className={styles.error}>{emailError}</p>}

            <Input
              type="password"
              className={styles.password}
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <p className={styles.error}>{passwordError}</p>}
          </div>

          <div className={styles.primaryBtns}>
            <div className={styles.createBtn}>
              <Button onClick={handleSignup}>Create Account</Button>
            </div>

            <div className={styles.googleBtn}>
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

          {/* {error && <p className={styles.error}>{error}</p>} */}
        </form>
      </div>
    </>
  );
}
