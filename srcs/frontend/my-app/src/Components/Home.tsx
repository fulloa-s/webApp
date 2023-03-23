import React from "react";
import "../Style/home.css";
import { UserType } from "../Types/UserType";

const Home = ({ user }: { user: UserType }) => {
  return (
    <div className="home">
      <div className="introduction">
        <h1>
          Hi {user.username}, <br />
          nice to meet You!
          <br />
          Welcome to my new Website!
        </h1>
      </div>
      <div className="demo">
        <h1>This is a very simple demo</h1>
      </div>
    </div>
  );
};

export default Home;
