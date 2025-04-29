import React, { useState } from 'react';
import { API_URL } from '../../data/apiPath';

const AddProduct = () => {
  const [mealType, setMealType] = useState("");
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mealType || !foodName || !category || !price ) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    const firmId = localStorage.getItem("firmId");
    if (!firmId) {
      alert("No firm ID found. Please create a firm first.");
      return;
    }

    const formData = new FormData();
    formData.append('product_Name', foodName);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('mealType', mealType);
    formData.append('image', image);

    try {
      const response = await fetch(`${API_URL}/product/add-product/${firmId}`, {
        method: "POST",
        headers: {
          'token': `${localStorage.getItem('loginToken')}`
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Food item added successfully!");
      } else {
        alert(data.error || "Failed to add food item.");
      }
    } catch (error) {
      console.error("Error while adding food item:", error);
      alert("Something went wrong. Please try again.");
    }

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
          <option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>  
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
