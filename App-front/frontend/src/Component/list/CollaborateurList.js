import { React, useState, useEffect } from 'react';
import { CollaborateurService } from '../../Services/Collaborateur/CollaborateurService';
import { useParams } from 'react-router-dom';
import { CollaborateurDeleteService } from '../../Services/Collaborateur/CollaborateurDeleteService';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const CollaborateurList = () => {
  const [Collaborateurs, setCollaborateur] = useState([]);
  const { userId,boardId } = useParams();
  const [isOrg, setIsOrg] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      try {

        const { res1, res2 } = await CollaborateurService(boardId);
        console.log("res1: ",res1)
        setCollaborateur(res2);
        setIsOrg(res1 === userId);
      } catch (err) {
        console.log("error in loading data :", err);
      }
    };
    loadData();
  }, [userId]);

  return (
    <div className='flex justify-center bg-gray-100'>
      <Card className="rounded-lg shadow-lg p-5 max-w-full w-full ">
        <Typography className='text-gray-700 text-center text-2xl font-bold mb-4'>
          List of Collaborateurs
        </Typography>
        <div className="relative overflow-x-auto ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nom</th>
                <th scope="col" className="px-6 py-3">Prenom</th>
                <th scope="col" className="px-6 py-3">Email</th>
                {isOrg && <th></th>}
              </tr>
            </thead>
            <tbody>
              {Collaborateurs.map((collaborateur) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {collaborateur.id}
                  </th>
                  <td className="px-6 py-4">{collaborateur.nom}</td>
                  <td className="px-6 py-4">{collaborateur.prenon}</td>
                  <td className="px-6 py-4">{collaborateur.email}</td>
                  <td>
                    {isOrg && (
                      <button onClick={() => { CollaborateurDeleteService() }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
