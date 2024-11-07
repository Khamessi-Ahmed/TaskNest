import React from "react";
import { Navigate, useParams } from "react-router-dom";
const api_base_url = "http://localhost:8080";

const BoardAddService = async ( Board,userId ) => {
  

  try {
    
    const rep = await fetch(`${api_base_url}/api/addBoard`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Board),
    });
   
  } catch (err) {
    console.log("error fetching data:", err);
    throw err;
  }
};

export default BoardAddService;
