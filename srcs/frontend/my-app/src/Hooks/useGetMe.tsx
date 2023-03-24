import React, { useEffect, useState } from "react";
import { UserType } from "../Types/UserType";

const useGetMe = (logged: boolean) => {
  const [user, setUser] = useState<UserType>({
    status: "pending",
    username: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/getMe", {
      method: "GET",
      credentials: "include",
    })
      .then((fetchRes) => fetchRes.json())
      .then((fetchRes) => {
        if (!fetchRes.status)
          setUser({
            status: "notLogged",
            username: "",
          });
        else
          setUser({
            status: "logged",
            username: fetchRes.username,
          });
      });
  }, [logged]);

  return user;
};

export { useGetMe };
