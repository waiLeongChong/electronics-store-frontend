import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCartContext } from "../Components/CartContext"; 

const API = process.env.REACT_APP_API_URL;

function ElectronicDetails() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [electronic, setElectronic] = useState({});
  const { addToCart } = useCartContext();

  useEffect(() => {
    axios
      .get(`${API}/electronics/${id}`)
      .then((response) => {
        setElectronic(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [id, navigate]);

  const deleteItem = () => {
    axios
      .delete(`${API}/electronics/${id}`)
      .then(() => {
        navigate("/electronics");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 xl:p-10 space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 md:flex md:space-x-4 lg:space-x-6 xl:space-x-8">
      
      <div className="md:w-1/2 w-full h-auto overflow-hidden p-4 border rounded-md">
        <img 
          src={electronic.image_url} 
          alt={electronic.name} 
          className="mx-auto w-full h-96 object-contain"
        />
      </div>

      <div className="md:w-1/2 space-y-4 mt-4 md:mt-0">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold">{electronic.name}</p>
        <p className="text-blue-600 text-lg md:text-xl">{electronic.brand}</p>
        <p className="text-gray-500 text-md md:text-lg">{electronic.category}</p>
        <p className="text-gray-700">{electronic.description}</p>
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold">${electronic.price}</div>

        <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
          <button 
            onClick={() => addToCart(electronic)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
          >
            Add to cart
          </button>
          <button 
            onClick={() => navigate("/electronics")}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 w-full md:w-auto mt-2 md:mt-0"
          >
            Back
          </button>
          <button 
            onClick={() => navigate(`/electronics/${id}/edit`)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full md:w-auto mt-2 md:mt-0"
          >
            Edit
          </button>
          <button 
            onClick={deleteItem}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full md:w-auto mt-2 md:mt-0"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ElectronicDetails;
