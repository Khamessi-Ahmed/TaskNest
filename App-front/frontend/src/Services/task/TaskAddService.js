import React from "react";
import { Navigate } from "react-router-dom";
const api_base_url = "http://localhost:8080";

const TaskAddService = async ( Task,boardId,userId ) => {
  

  try {
    
    const rep = await fetch(`${api_base_url}/api/addTache/${boardId}/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Task),
    });
   
  } catch (err) {
    console.log("error fetching data:", err);
    throw err;
  }
};

export default TaskAddService;
