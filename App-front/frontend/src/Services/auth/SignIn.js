import React from "react";
import { Navigate, useParams } from "react-router-dom";
const api_base_url = "http://localhost:8080";

export const SignIn =async (user) => {
    const { userId } = useParams();

    try {
        const rep1=await  fetch(`http://localhost:8080/addColaborateur`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    collaborateur: {
                        nom:user.username,
                        email:user.email,
                        password:user.password,
                    }
                })
            })
       
      Navigate(`/listboard/${userId}`);
    } catch (err) {
      console.log("error fetching data:", err);
      throw err;
    }
}

