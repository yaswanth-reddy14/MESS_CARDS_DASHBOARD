import React, { useState } from 'react';

const AddProduct = () => {
  const [mealType, setMealType] = useState("");
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!mealType || !foodName || !category || !price || !image) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    
    console.log({
      mealType,
      foodName,
      category,
      price,
      image
    });

    alert("Food item added successfully!");

    
    setMealType("");
    setFoodName("");
    setCategory("");
    setPrice("");
    setImage(null);
  };

  return (
    <div className="firmSection">
      <form className="tableForm" onSubmit={handleSubmit}>
        <h3>Add Food Item</h3>

        <label htmlFor="mealType">Meal Type</label>
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
        >
          <option value="">Select Meal Type</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        <label>Food Name</label>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="Enter Food Name"
        />

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        <label>Price (₹)</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
        />

        <label>Upload Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Add Food Item</button>
      </form>
    </div>
  );
};

export default AddProduct;
