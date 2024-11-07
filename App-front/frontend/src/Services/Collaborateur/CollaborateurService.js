import { useParams } from "react-router-dom"

const api_base_url = "http://localhost:8080"

export const CollaborateurService = async (boardId) => {
  try{
    
    
    const rep1= await fetch(`${api_base_url}/api/organisateurByBoard/${boardId}`,
{
  method:"GET",
  headers:{"Content-Type":"application/json"}
}
    )
    
    const rep2= await fetch(`${api_base_url}/api/listCollaborateur/${boardId}`,
      {
        method:"GET",
        headers:{"Content-Type":"application/json"}
      }
    );    
    
    
    const res1 = await rep1.json();
    const res2 = await rep2.json();
    
    return {res1, res2};
  }catch(err){
    console.log("error fetching data:" ,err);
    throw err;
  }
}