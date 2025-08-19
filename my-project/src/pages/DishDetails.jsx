import { FiArrowLeft, FiPlus, FiMinus } from 'react-icons/fi'; // Importing icons from React Icons
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { menuItems } from '../data/sampleMenuData';

const DishDetails = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const allDishes = [
      ...menuItems.starters,
      ...menuItems.mains,
      ...menuItems.desserts,
      ...menuItems.drinks
    ];

    const foundDish = allDishes.find(item => item.id === parseInt(id));

    const timer = setTimeout(() => {
      setDish(foundDish);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    if (!dish) return;
  
    const existingItemIndex = cartItems.findIndex(item => item.id === dish.id);
  
    if (existingItemIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...dish,
          quantity: quantity,
        },
      ]);
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${quantity} ${dish.name} added to cart!`);
    setQuantity(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }

  if (!dish) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dish Not Found</h2>
        <p className="text-gray-600 mb-6">We couldn't find the dish you're looking for.</p>
        <Link
          to="/menu"
          className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
        >
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          <Link
            to="/menu"
            className="inline-flex items-center text-white hover:text-amber-300 mb-6 transition-colors"
          >
            <FiArrowLeft className="h-5 w-5 mr-2" />
            Back to Menu
          </Link>

          <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  {dish.isNew && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-md">
                      NEW
                    </span>
                  )}
                  {dish.isPopular && (
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-md">
                      POPULAR
                    </span>
                  )}
                  {dish.isChefSpecial && (
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full shadow-md">
                      CHEF'S SPECIAL
                    </span>
                  )}
                  {dish.isVegetarian && (
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-md">
                      VEGETARIAN
                    </span>
                  )}
                </div>
              </div>

              <div className="lg:w-1/2 p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{dish.name}</h1>
                    <p className="text-amber-600 font-medium">{dish.category || 'Specialty'}</p>
                  </div>
                  <span className="text-2xl font-bold text-amber-600">
                    ${typeof dish.price === 'string' ? dish.price : dish.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{dish.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {dish.ingredients?.map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      onClick={decrementQuantity}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-l-lg hover:bg-gray-200"
                    >
                      <FiMinus className="h-5 w-5" />
                    </button>
                    <div className="w-16 h-10 flex items-center justify-center bg-gray-50 border-t border-b border-gray-200">
                      {quantity}
                    </div>
                    <button
                      onClick={incrementQuantity}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-r-lg hover:bg-gray-200"
                    >
                      <FiPlus className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={addToCart}
                  className="w-full py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
