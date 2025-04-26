import React from 'react';

const AddProduct = () => {
  return (
    <div className="firmSection">
      <form className="tableForm">
        <h3>Add Food Item</h3>

        <label htmlFor="mealType">Meal Type</label>
        <select id="mealType">
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>

        <label htmlFor="foodName">Food Name</label>
        <input type="text" id="foodName" placeholder="Enter Food Name" />

        <label htmlFor="category">Category</label>
        <select id="category">
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>

        <label htmlFor="price">Price (₹)</label>
        <input type="text" id="price" placeholder="Enter Price" />

        <label htmlFor="imageUpload">Upload Image</label>
        <input type="file" id="imageUpload" />

        <button type="submit">Add Food Item</button>
      </form>
    </div>
  );
};

export default AddProduct;
