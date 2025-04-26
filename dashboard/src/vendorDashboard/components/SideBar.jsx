import React from 'react'

const SideBar = ({showFirmHandler,showProductHandler}) => {
  return (
    <div className="sideBarSection">
        <ul>
            <li onClick={showFirmHandler}>Add Mess</li>
            <li onClick={showProductHandler}>Add Product</li>
            <li>All Products</li>
            <li>Student Details</li>
        </ul>
    </div>
  )
}

export default SideBar