import React, { useState, useEffect } from "react";
import BoardService from "../../Services/Board/BoardService";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, useParams } from "react-router-dom";

const BoardList = () => {
  const [Boards, setBoards] = useState([]);
  const { userId } = useParams();
  
  useEffect(() => {
    const loadData = async ()=> {
        try{
            const res = await BoardService(userId);
            console.log(res);
            setBoards(res);
        } catch(err){
            console.log("error in loading data :",err);
        }
    }
    loadData();
  }, []); 
  
  
  

  const addBoard = () => {
    
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Boards</h1>
        <p className="text-lg text-gray-600">Manage and access your project boards</p>
        <Link to={`/createBoard/${userId}`}><button
          
          className="mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Add Board
        </button></Link>
        
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Boards?.map((board) => (
          <Card
            key={board.id}
            sx={{ maxWidth: 345 }}
            className="rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300"
          >
            <CardContent className="bg-gray-800 text-white rounded-t-lg">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-center font-semibold text-lg"
              >
                {board.nom}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className="text-center text-sm text-gray-300"
              >
                {board.description}
              </Typography>
            </CardContent>
            <CardActions className="bg-gray-800 text-white flex justify-center rounded-b-lg">
              <Link
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition duration-300"
                to={`/taskList/${board.id}/${userId}`}
              >
                Enter Board
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BoardList;
