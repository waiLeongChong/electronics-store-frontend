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
    <div className="py-8 text-left ">
      <div style={{ width: '800px' }} className="container mx-auto bg-white rounded-xl shadow-md p-4">
        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 ">
          <div className="flex">

            {/* image left */}
            <div className="mr-8">
              <img src={electronic.image_url || "https://via.placeholder.com/200"} alt={electronic.name} className="w-64 h-64 rounded" />
            </div>

            <div className="flex-1 space-y-6">
              {/* image url */}
              <div>
                <label htmlFor="image_url" className="block text-gray-700 font-medium">Image URL:</label>
                <input type="url" id="image_url" value={electronic.image_url} onChange={handleInput} required 
                    placeholder="http://example.com/image.jpg"
                    className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300 p-2"/>
              </div>

              {/* category */}
              <div>
                <label htmlFor="category" className="block text-gray-700 font-medium">Category:</label>
                <select value={electronic.category} onChange={handleInput} id="category" required 
                        className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300 p-2">
                    {categoryList.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
              </div>

              {/* brand and price */}
              <div className="flex justify-between space-x-4">
                {/* brand */}
                <div className="flex-1">
                  <label htmlFor="brand" className="block text-gray-700 font-medium">Brand:</label>
                  <input type="text" id="brand" value={electronic.brand} onChange={handleInput} required 
                        className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300 p-2"/>
                </div>

                {/* price */}
                <div className="flex-1">
                  <label htmlFor="price" className="block text-gray-700 font-medium">Price:</label>
                  <input type="number" id="price" value={electronic.price || ""} onChange={handleInput} required 
                        className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300 p-2"/>
                </div>
              </div>


            </div> 
          </div> 

          {/* name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Title:</label>
            <input type="text" id="name" value={electronic.name} onChange={handleInput} required 
                  className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300 p-2"/>
          </div>

          {/* description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium">Description:</label>
            <textarea id="description" value={electronic.description} onChange={handleInput} required 
                  className="mt-1 block w-full bg-gray-100 rounded-md border border-gray-300 h-32 resize-y p-2"></textarea>
          </div>

          {/* button */}
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-blue-600 text-white px-6 py-4 rounded hover:bg-blue-700 w-full">
              Add New Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewForm;