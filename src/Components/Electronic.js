import React from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from "../Components/CartContext"; 

function Electronic({ electronic }) {    
  const { addToCart } = useCartContext();

  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      
      <div className="w-full h-48 rounded-md overflow-hidden mb-4">
        <img src={electronic.image_url} alt={electronic.name} className="w-full h-full object-contain"/>
      </div>

      <div className="mb-4">
        <div className="font-bold text-xl text-left">${electronic.price}</div>
        <p className="font-medium text-lg text-left truncate">{electronic.name}</p>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between space-y-2 sm:space-y-0 md:space-y-2 lg:space-y-0">
        <button 
          onClick={() => addToCart(electronic)}
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto mb-2 sm:mb-0 md:w-full lg:w-auto lg:mb-0 md:text-sm lg:text-sm"
        >
          ADD CART
        </button>
        <Link 
          to={`/electronics/${electronic.id}`} 
          className="bg-blue-500 text-sm text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto md:w-full lg:w-auto lg:mb-0 md:text-sm lg:text-sm"
        >
          VIEW ITEM
        </Link>
      </div>
    </div>
  );
}

export default Electronic;
