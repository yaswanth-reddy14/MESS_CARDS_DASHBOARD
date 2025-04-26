import React from 'react';


const AddFirm = () => {
  return (
    <div className="firmSection">
      <form className="tableForm" >
        <h3>Add Mess Details</h3>

        <label htmlFor="messName">Mess Name</label>
        <input type="text" id="messName" placeholder="Enter Mess Name" />

        <label htmlFor="area">Area</label>
        <input type="text" id="area" placeholder="Enter Area" /> 

        <label htmlFor="address">Mess Address</label>
        <input type="text" id="address" placeholder="Enter Mess Address" /><br/>

        <label htmlFor="contact">Contact Number</label>
        <input type="text" id="contact" placeholder="Enter Contact Number" /><br/>

        <label htmlFor="Upload Your Mess Image">Upload Your Mess Image</label>
        <input type="file" id="Upload Your Mess Image" placeholder="Upload Your Mess Image" /><br/>

        <label></label>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  )
}

export default AddFirm;
