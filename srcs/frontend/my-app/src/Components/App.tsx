import React, { useEffect, useState } from "react";
import "../Style/App.css";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import { useGetMe } from "../Hooks/useGetMe";
import { UserType } from "../Types/UserType";

export const switchComponent = (
  user: UserType,
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
) => {
  switch (user.status) {
    case "logged":
      return (
        <div>
          <Header setLogged={setLogged} />
          <Home user={user} />
        </div>
      );
    case "notLogged":
      return <Login setLogged={setLogged} />;
    default:
      break;
  }
};

function App() {
  const [logged, setLogged] = useState<boolean>(false);
  const user: UserType = useGetMe(logged);

  return (
    <div className="App">
      {switchComponent(user, setLogged)}
      <img src="./wave.svg" alt="shape1" id="shape1" />
    </div>
  );
}

export default App;
