import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ showFirmHandler, showProductHandler }) => {
  const navigate = useNavigate();

  return (
    <div className="sideBarSection">
      <ul>
        <li onClick={() => navigate('/show-messes')}>Show Messes</li>
        <li onClick={showFirmHandler}>Add Mess</li>
        <li onClick={showProductHandler}>Add Product</li>
        <li>Student Details</li>
      </ul>
    </div>
  );
};

export default SideBar;
