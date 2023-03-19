import React, { useEffect, useState } from "react";

const useGetFetch = () => {
  let ready: boolean = false;
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/', {
      method: "GET",
    })
      .then((fetchRes) => fetchRes.json())
      .then((fetchRes) => setRes(fetchRes));
  }, []);

  ready = res == null ? false : true;
  return {res, ready}
};
