import React, { useEffect, useState } from "react";

 const useGetFetch = (endpoint:string) => {
    
    const [res, setRes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/', {
            method: 'GET'
        }).then(res => res.json()).then(res => console.log(res))
    }, [])


    }