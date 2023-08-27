import { Link } from "react-router-dom";
import { useCartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faFolderPlus, faCube, faRectangleList } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const { totalQuantity } = useCartContext();

  return (
    <nav className="bg-blue-500 p-6 shadow-md">
      <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-between items-center">
        
        {/* logo */}
        <Link to="/" className="text-white hover:text-gray-200 text-4xl font-black mb-4 lg:mb-0">
          <FontAwesomeIcon icon={faCube} /> electro.
        </Link>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 items-center">
          
          <div className="hidden lg:flex space-x-24">
            <Link to="/electronics" className="text-white hover:text-gray-200 text-xl">
              <FontAwesomeIcon icon={faRectangleList} /> Product List
            </Link>

            <Link to="/electronics/new" className="text-white hover:text-gray-200 text-xl">
              <FontAwesomeIcon icon={faFolderPlus} /> Add Product
            </Link>
          </div>

          {/* cart */}
          <div className="relative">
            <Link to="/cart" className="text-white hover:text-gray-200 flex items-center space-x-2">
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 bg-gray-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>

        <div className="flex space-x-8 lg:hidden">
          <Link to="/electronics" className="text-white hover:text-gray-200 text-xl">
            <FontAwesomeIcon icon={faRectangleList} /> Product List
          </Link>

          <Link to="/electronics/new" className="text-white hover:text-gray-200 text-xl">
            <FontAwesomeIcon icon={faFolderPlus} /> Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
