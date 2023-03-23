import React, { useState } from "react";
import "../Style/Login.css";
import { newUserType } from "../Types/UserType";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Tooltip } from "@mui/material";

export default function Login({setLogged} : {setLogged: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [newUser, setNewUser] = useState<newUserType>({
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
        credentials: "include",
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

  const login = (e: any) => {
    e.preventDefault();
    if (newUser.username.length || newUser.password.length)
      fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status) {
            setError(false);
            setLogged(prev => !prev)
          } else setError(true);
        });
  };

  console.log("render Login");
  return (
    <div className="vertical-container">
      <div className="Login">
        <div
          className={signUpMode ? "container right-panel-active" : "container"}
          id="container"
        >
          <div className="form-container sign-up-container">
            <div className="warning-login"></div>
            <form>
              <h1 style={{ marginBottom: "10px" }}>Create Account</h1>
              {error && (
                <Tooltip title="Already in use">
                  <ErrorOutlineIcon
                    sx={{ position: "absolute", left: 10, color: "#ff4b2b" }}
                  />
                </Tooltip>
              )}
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
                className="button-login"
                onClick={(e) => createNewUser(e)}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1 style={{ marginBottom: "10px" }}>Sign in</h1>
              {error && (
                <Tooltip title="Not registered">
                  <ErrorOutlineIcon
                    sx={{ position: "absolute", left: 10, color: "#ff4b2b" }}
                  />
                </Tooltip>
              )}
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
              <button className="button-login" onClick={(e) => login(e)}>
                Sign In
              </button>
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
                  className="ghost button-login-change"
                  id="signIn"
                  onClick={() => {
                    setError(false);
                    setNewUser({ username: "", password: "" });
                    setSignUpMode(!signUpMode);
                  }}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="ghost button-login-change"
                  id="signUp"
                  onClick={() => {
                    setError(false);
                    setNewUser({ username: "", password: "" });
                    setSignUpMode(!signUpMode);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
