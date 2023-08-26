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
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">

        {/* Image URL */}
        <div className="flex justify-center mt-4">
          <img src={electronic.image_url} alt={electronic.name} className="w-full md:w-1/2 mx-auto mb-4 rounded" />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="image_url" className="block text-gray-700 font-medium">Image URL:</label>
          <input type="url" id="image_url" value={electronic.image_url} onChange={handleInput} required 
              placeholder="http://example.com/image.jpg"
              className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-gray-700 font-medium">Category:</label>
            <select value={electronic.category} onChange={handleInput} id="category" required 
                    className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300">
                {categoryList.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
          </div>

          {/* Brand */}
          <div>
            <label htmlFor="brand" className="block text-gray-700 font-medium">Brand:</label>
            <input type="text" id="brand" value={electronic.brand} onChange={handleInput} required 
                   className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300"/>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Title:</label>
            <input type="text" id="name" value={electronic.name} onChange={handleInput} required 
                   className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300"/>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-gray-700 font-medium">Description:</label>
            <input type="text" id="description" value={electronic.description} onChange={handleInput} required 
                   className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300"/>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-gray-700 font-medium">Price:</label>
            <input type="number" id="price" value={electronic.price || ""} onChange={handleInput} required 
                   className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300"/>
          </div>

        </div>


        <div className="flex justify-center mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Items
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewForm;