import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginInfo = () => {
    const navigate = useNavigate();
    useEffect( ()=>{
    const fetchUserInfo = async () => {

        try {

            const rep1 = await fetch("http://localhost:8080/api/user-info", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log("user info returned");

            const user = await rep1.json();
            const rep2 = await fetch(`http://localhost:8080/addColaborateur`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        collaborateur: {
                            nom: user.username,
                            email: user.email
                        }
                    })
                })


            console.log("user data sent successfully");

            const rep3 = await fetch("http://localhost:8080/findCollabByEmail", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            navigate(`/listBoard/${rep3.json().id}`)



        } catch (error) {
            console.log("error occured : " + error);
        };
    }
fetchUserInfo()
},[navigate])
}

export default LoginInfo