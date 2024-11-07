import { Navigate, useParams } from "react-router-dom"

const api_base_url = "http://localhost:8080"

export const CollaborateurDeleteService = async () => {
  try{
    const {boardId,userId} = useParams();
    
    const rep= await fetch(`${api_base_url}/api/ListColaborateur/${boardId}`,
      {
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
      }
    ); 
    
    Navigate("/listCollaborateur/1/1");
    
    
  }catch(err){
    console.log("error fetching data:" ,err);
    throw err;
  }
}