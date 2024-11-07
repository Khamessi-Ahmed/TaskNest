import React, { useEffect, useState } from 'react';
import { CollaborateurService } from '../../Services/Collaborateur/CollaborateurService';
import { useParams,useNavigate } from 'react-router-dom';
import TaskAddService from '../../Services/task/TaskAddService';
const TaskForm = () => {
    const navigate = useNavigate();
    const {boardId,userId}= useParams();
    const [collaborators,setCollaborators] =useState([])
  const [task, setTask] = useState({
    deadline: '',
    etat:"rest",
    board_id:boardId,
    priorite: '',
    colaborateur_id: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  useEffect(() => {
    const loadData = async ()=> {
        try{
            const {res2} = await CollaborateurService(boardId);
            
            setCollaborators(res2);
        } catch(err){
            console.log("error in loading data :",err);
        }
    }
    loadData();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const formattedTask = {
            ...task,
            board_id: Number(task.board_id),
            colaborateur_id: Number(task.colaborateur_id),
          };
      console.log("Task being sent:", formattedTask);  // Debug log to confirm values
      await TaskAddService(formattedTask, boardId,userId); // Send task with userId as a parameter if needed
  
      // Resetting form state but keep board_id set to boardId
      setTask({
        deadline: '',
        etat: "rest",
        board_id: parseInt(boardId), // Set back to boardId if required by the backend
        priorite: '',
        colaborateur_id: '',
        description: '',
      });
      
      navigate(`/TaskList/${boardId}/${userId}`);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>

      <div className="mb-4">
        <label htmlFor="deadline" className="block text-gray-700 font-medium mb-2">
          Deadline
        </label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priorite" className="block text-gray-700 font-medium mb-2">
          Priority
        </label>
        <select
          id="priorite"
          name="priorite"
          value={task.priorite}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Select priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="id_cloab" className="block text-gray-700 font-medium mb-2">
          Collaborator
        </label>
        <select
          id="colaborateur_id"
          name="colaborateur_id"
          value={task.colaborateur_id}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Select collaborator</option>
          {collaborators.map((collab) => (
            <option key={collab.id} value={collab.id}>
              {collab.nom}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          rows="4"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
