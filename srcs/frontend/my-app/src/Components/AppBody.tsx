import React, { useState } from "react";
import "../Style/appBody.css";
import { newUserType } from "../Types/UserType";

export default function AppBody() {
  const [newUser, setNewUser] = useState<newUserType>({
    username: "",
    password: "",
  });

  const changeNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(newUser)
    setNewUser({...newUser,
    username: e.target.value})
  }

  const changeNewPsw = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(newUser)
    setNewUser({...newUser,
    password: e.target.value})
  }

  return (
    <div className="appBody">
      <div className="container right-panel-active" id="container">
        <div className="form-container sign-up-container">
          <form>
            <h1 style={{ marginBottom: "10px" }}>Create Account</h1>
            <input onChange={(e) => changeNewUser(e)} type="text" placeholder="Username" />
            <input onChange={(e) => changeNewPsw(e)}type="password" placeholder="Password" />
            <button style={{ marginTop: "10px" }}>Sign Up</button>
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
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
