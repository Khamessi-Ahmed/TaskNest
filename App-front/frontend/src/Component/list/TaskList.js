import React, { useEffect, useState } from 'react';
import listTacheService from '../../Services/task/listTaskService';
import {Link,useParams} from "react-router-dom"
import { CollaborateurService } from '../../Services/Collaborateur/CollaborateurService';
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const { userId,boardId } = useParams();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await listTacheService.getTasks(boardId);
        const {res1, res2} = await CollaborateurService(boardId);
        console.log(res)
        setCollaborators(res2);
        
        setTasks(res);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);
  const getCollaboratorNameById = (collaboratorId) => {
    
    const collaborator = collaborators.find((collab) => collab.id === collaboratorId);
    return collaborator ? `${collaborator.nom} ${collaborator.prenon}` : 'Unknown';
  };
  
  return (


    <div className="min-h-screen bg-gray-100 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tasks</h1>
        <p className="text-lg text-gray-600">Manage and access your boards Tasks</p>
        <Link to={`/createTask/${boardId}/${userId}`}><button

          className="mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Add Task
        </button></Link>

      </div>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
      {tasks?.map((task) => (
        <div key={task.id} className="rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
          <h3 className="text-xl font-semibold mb-2">{task.id}</h3>
          <p><span className="font-medium">Deadline:</span> {task.deadline}</p>
          <p><span className="font-medium">Status:</span> {task.etat}</p>
          <p><span className="font-medium">Priority:</span> {task.perioriter}</p>
          
          <p><span className="font-medium">Collaborator:</span>{task.colaborateur.nom + " " +task.colaborateur.prenon }</p>
          <p><span className="font-medium">Description:</span> {task.description}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TaskList;
