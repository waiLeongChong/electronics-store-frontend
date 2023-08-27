import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart: items, increaseQuantity, decreaseQuantity, removeFromCart } = useCartContext();

  const handleIncreaseQuantity = (id) => {
      increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id) => {
      decreaseQuantity(id);
  };

  const handleRemoveItem = (id) => {
      removeFromCart(id);
  };

  const totalPrice = items.reduce((total, item) => total + (Number(item.price) * item.quantity), 0).toFixed(2);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold mb-6 text-center border-b pb-4">Your Shopping Cart</h2>
        
        <ul className="divide-y">
          {items.map(item => (
            <li key={item.id} className="flex justify-between items-center py-4">
              <img src={item.image_url} alt={item.name} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
              
              <div className="flex-1 flex flex-col sm:flex-row items-center justify-between pl-6">
                <div className="space-y-2">
                  <span className="block font-semibold text-lg">{item.name}</span>
                  <span className="block text-sm text-left text-gray-600">{item.brand}</span>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center">-</button>
                    <span className="text-lg">{item.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(item.id)} className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center">+</button>
                  </div>
                  <span className="text-lg font-semibold">${Number(item.price).toFixed(2)}</span>
                  <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 px-2 py-1 text-sm">Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center mt-6">
          <div className="text-2xl font-semibold">Total: <span className="text-blue-600">${totalPrice}</span></div>
          <Link to="/electronics" className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition duration-300">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;

