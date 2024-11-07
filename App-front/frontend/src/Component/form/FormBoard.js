import React from "react";
import BoardAddService from "../../Services/Board/BoardAddService";
import { useNavigate, useParams } from "react-router-dom";

const FormBoard = () => {
  const navigate=useNavigate()
  const {userId}=useParams()
  const [Board, setBoard] = React.useState({
    nom: "",
    description: "",
    idORGANISATEUR: userId,
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await BoardAddService(Board,userId); // Call the service function correctly
      // Optionally, reset the form or navigate elsewhere
      setBoard({ nom: "", description: "", idORGANISATEUR: 1 }); // Resetting form after submission
      navigate(`/listBoard/${userId}`)
    } catch (error) {
      console.error("Error adding board:", error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBoard((prevBoard) => ({ ...prevBoard, [id]: value })); // Use functional update
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="max-w-md w-full bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4 text-gray-900">Create New Board</h2>
        <div className="mb-5">
          <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900">
            Nom
          </label>
          <input
            onChange={handleChange}
            id="nom"
            value={Board.nom}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Board Name"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <input
            onChange={handleChange}
            id="description"
            value={Board.description}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Board Description"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormBoard;
