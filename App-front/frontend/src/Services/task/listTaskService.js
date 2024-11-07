

const getTasks = async (boardId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/ListTache/${boardId}`,
    {
      method:"GET",
      headers:{"Content-Type":"application/json"}
    }
        );
        const res=await response.json();
   
      return res;
      
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  };
  
  export default { getTasks };
  