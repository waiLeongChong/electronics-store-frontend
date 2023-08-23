import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewForm() {
  let navigate = useNavigate();
  
  const addElectronic = (newElectronic) => {
    axios
      .post(`${API}/electronics`, newElectronic)
      .then(() => {
        alert("Items added");
        navigate(`/electronics`);
      })
      .catch((error) => {
        console.error(error);
        alert("error adding Items.");
      });
  };

  const [electronic, setElectronic] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    image_url: "",
    price: 0,
  });

  const categoryList = ["Camera and Lens", "Camera Accessories", "Camcorder", "Mobile", "Speaker", "Computer"]

  const handleInput = (event) => {
    setElectronic({
      ...electronic,
      [event.target.id]: event.target.value
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    addElectronic(electronic);
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category:</label>
        <select value={electronic.category} onChange={handleInput} id="category" required>
            {categoryList.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
            ))}
        </select>

        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" value={electronic.brand} onChange={handleInput} required />

        <label htmlFor="title">Title:</label>
        <input type="text" id="name" value={electronic.name} onChange={handleInput} required />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={electronic.description} onChange={handleInput} required />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={electronic.price || ""} onChange={handleInput} required />
        
        <label htmlFor="image">Image URL:</label>
        <input type="url" id="image_url" value={electronic.image_url} placeholder="http://example.com/image.jpg" onChange={handleInput} required />

        <img src={electronic.image_url} alt={electronic.name} style={{ width: '200px' }} />


        <button type="submit">Add Items</button>
      </form>

    </div>
  );
}

export default NewForm;