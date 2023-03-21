import React from "react";
import "../Style/App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
