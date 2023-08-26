// import { Link } from "react-router-dom";
// import { useCartContext } from './CartContext';

// function NavBar() {
//   const { totalQuantity } = useCartContext();
//   console.log(`track add quantity: ${totalQuantity}`);
 

//   return(
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/electronics">Electronic List</Link>
//       <Link to="/electronics/new">Add New Item</Link>
//       <Link to="/cart">Cart ({totalQuantity})</Link>
//     </div>
//   );
// }

// export default NavBar;


import { Link } from "react-router-dom";
import { useCartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  const { totalQuantity } = useCartContext();

  return (
    <nav className="bg-blue-900 p-6 shadow-md flex justify-between text-lg">
      <div className="container mx-auto max-w-screen-lg flex items-center space-x-24">
        
        {/* Logo  */}
        <Link to="/" className="text-white hover:text-gray-200 text-3xl font-black">
          <FontAwesomeIcon icon={faCube} /> electro.
        </Link>

        <Link to="/electronics" className="text-white hover:text-gray-200">
          <FontAwesomeIcon icon={faRectangleList} /> Product List
        </Link>
      </div>

      <div className="container flex items-center space-x-8 justify-end">          
        <Link to="/electronics/new" className="text-white hover:text-gray-200">
          <FontAwesomeIcon icon={faFolderPlus} />
        </Link>

        <div className="relative">
          <Link to="/cart" className="text-white hover:text-gray-200 flex items-center space-x-2">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>({totalQuantity})</span>
          </Link>
          
          {totalQuantity > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
              {totalQuantity}
            </span>
          )}
        </div>
      </div>

      
    </nav>
  );
}

export default NavBar;
