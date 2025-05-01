import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
const ShowMesses = () => {
  const [messes, setMesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMesses = async () => {
      const token = localStorage.getItem('token'); // Make sure token is saved after login

      try {
        const response = await fetch('http://localhost:4000/api/firms/my-firms', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: token, // Token must be passed to access vendor-specific data
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch vendor firms');
        }

        const data = await response.json();
        setMesses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMesses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Your Messes</h2>
      <ul>
        {messes.map((mess) => (
          <li key={mess._id}>
            <h3>{mess.mess_Name}</h3>
            <p>{mess.mess_Address}</p>
            <p>Area: {mess.area}</p>
            <p>Contact: {mess.contact}</p>
            {mess.image && <img src={mess.image} alt="Mess" width="150" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowMesses;