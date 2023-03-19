import React from "react";
import "../Style/App.css";
import { Route, Routes } from "react-router-dom";
import AppBody from "./AppBody";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<AppBody />} />
      </Routes>
    </div>
  );
}

export default App;
