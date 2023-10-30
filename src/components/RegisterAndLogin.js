import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./style.css";
function RegisterAndLogin() {
  const [login, setLogin] = useState(false);
  const [left, setLeft] = useState(false);
  // const [right, setRight] = useState();

  const register = () => {
    setLogin(false)
    setLeft(false)
  }
  const log = () => {
    setLogin(true)
    setLeft(true)

  }

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  }
  return (
    <div className="container">
      <h2> Registration and login Screen </h2>
      <div className="form-box">
        <div className="button-box">
          <div className={left === true ? "left1" : "right"} id="btn"></div>

          <button type="button" className="toggle-btn"
            onClick={register}>Register</button>
          <button type="button" className="toggle-btn"
            onClick={log} >Log In</button>
        </div>
        <h2>{login ? "Log In" : "Register"}</h2>
        <form id="login" className="input-group" onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
          <input className="input-field" name="email" placeholder="Email" />
          <br />
          <input className="input-field" name="password" type="password" placeholder="Password" />
          <br />
          <p className="forgot" onClick={handleReset}>Forgot Password?</p>
          <br />
          <button className="submit-btn">{login ? "Log In" : "Register"}</button>
        </form>
      </div>
    </div>
  );
}
export default RegisterAndLogin;
