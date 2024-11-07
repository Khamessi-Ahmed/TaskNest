import React from 'react'
import { useParams } from 'react-router-dom'
const api_base_url = "http://localhost:8080"

const BoardService = async(userId) => {
  
    try{
      
        const rep= await fetch(`${api_base_url}/api/listBoard/${userId}`,
    {
      method:"GET",
      headers:{"Content-Type":"application/json"}
    }
        )
        
        const res = await rep.json();
        console.log("data :", res)
        return res;
      }catch(err){
        console.log("error fetching data:" ,err);
        throw err;
      }
}

export default BoardService