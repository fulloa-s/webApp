import React, { useState } from "react";
import "../Style/Login.css";
import { UserType } from "../Types/UserType";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Tooltip } from "@mui/material";


export default function Login() {
  const [newUser, setNewUser] = useState<UserType>({
    username: "",
    password: "",
  });
  const [signUpMode, setSignUpMode] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const changeNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(newUser);
    setNewUser({ ...newUser, username: e.target.value });
  };

  const changeNewPsw = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(newUser);
    setNewUser({ ...newUser, password: e.target.value });
  };

  const createNewUser = (e: any) => {
    e.preventDefault();
    if (newUser.username.length || newUser.password.length)
      fetch("http://localhost:5000/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status) {
            setNewUser({ username: "", password: "" });
            setSignUpMode(!signUpMode);
            setError(false);
          } else setError(true);
        });
  };

  console.log("render Login");
  return (
    <div className="Login">
      <div
        className={signUpMode ? "container right-panel-active" : "container"}
        id="container"
      >
        <div className="form-container sign-up-container">
          <div className="warning-login"></div>
          <form>
            <h1 style={{ marginBottom: "10px" }}>Create Account</h1>
            {error && <Tooltip title="Already in use">
              <ErrorOutlineIcon
                sx={{ position: "absolute", left: 10, color: "#ff4b2b" }}
              />
            </Tooltip>}
            <input
              onChange={(e) => changeNewUser(e)}
              type="text"
              placeholder="Username"
              value={newUser.username}
            />
            <input
              onChange={(e) => changeNewPsw(e)}
              type="password"
              placeholder="Password"
              value={newUser.password}
            />
            <button
              onClick={(e) => createNewUser(e)}
              style={{ marginTop: "10px" }}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setSignUpMode(!signUpMode)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setSignUpMode(!signUpMode)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
