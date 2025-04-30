import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyFirms from '../components/forms/MyFirms';

<MyFirms />


const MyFirms = () => {
  const [firms, setFirms] = useState([]);

  useEffect(() => {
    const fetchFirms = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:4000/api/firms/my-firms', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setFirms(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFirms();
  }, []);

  return (
    <div>
      <h2>My Messes</h2>
      <ul>
        {firms.map((firm) => (
          <li key={firm._id}>{firm.name} - {firm.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyFirms;
