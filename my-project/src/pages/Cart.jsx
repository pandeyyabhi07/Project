import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleCancelOrder = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Your cart is empty!</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Your Orders</h1>
          <Link to="/" className="text-sm text-blue-500">← Back to Menu</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow flex">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">₹{item.price} x {item.quantity}</p>
              </div>
              <button
                onClick={() => handleCancelOrder(item.id)}
                className="text-red-500 text-lg font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;