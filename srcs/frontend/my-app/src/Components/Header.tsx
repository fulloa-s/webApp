import React, { useState } from "react";
import "../Style/Header.css";

const logout = (setLogged: React.Dispatch<React.SetStateAction<boolean>>) => {
  fetch("http://localhost:5000/logout", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/JSON",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setLogged((prev) => !prev);
    });
};

export default function Header({
  setLogged,
}: {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="header">
      <button className="button-logout" onClick={() => logout(setLogged)}>
        Logout
      </button>
    </div>
  );
}
