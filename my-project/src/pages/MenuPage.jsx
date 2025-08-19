import { useState } from "react";
import { Link } from "react-router-dom";
import { menuCategories, menuSections } from "../data/sampleMenuData";

const MenuPage = ({ dishes }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSection, setActiveSection] = useState("food");
  const [cartItems, setCartItems] = useState([]);

  // Combine all dishes from different categories
  const allDishes = [
    ...(dishes.starters || []),
    ...(dishes.mains || []),
    ...(dishes.desserts || []),
    ...(dishes.drinks || [])
  ];

  const filteredItems = activeCategory === "all" 
    ? allDishes 
    : dishes[activeCategory] || [];

  const addToCart = (dish) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === dish.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          alt="Restaurant dishes"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-2xl">
            Carefully crafted dishes using the finest seasonal ingredients
          </p>
        </div>
      </div>

      {/* Menu Navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-6 hide-scrollbar">
            {menuSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-amber-500 text-white"
                    : "text-gray-700 hover:bg-amber-50"
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-amber-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Special Offers Banner */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl p-6 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">Today's Special</h3>
              <p className="text-amber-100">3-course meal for $49 - Available until 8PM</p>
            </div>
            <Link 
              to="/dish/special-meal" 
              className="px-6 py-2 bg-white text-amber-600 font-medium rounded-full hover:bg-gray-50 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                item.isChefSpecial ? "border-2 border-amber-400" : "border border-gray-100"
              }`}
            >
              {/* Item Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "https://via.placeholder.com/300x200?text=No+Image"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  {item.isNew && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-md">
                      NEW
                    </span>
                  )}
                  {item.isPopular && (
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-md">
                      POPULAR
                    </span>
                  )}
                  {item.isChefSpecial && (
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full shadow-md">
                      CHEF'S PICK
                    </span>
                  )}
                  {item.isVegetarian && (
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-md">
                      VEGETARIAN
                    </span>
                  )}
                </div>
              </div>

              {/* Item Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-600">
                    ${typeof item.price === "string" ? item.price : item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium"
                  >
                    Add to Order
                  </button>
                  <Link
                    to={`/dish/${item.id}`}
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Information */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Dietary Information</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-700">Vegetarian</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-700">Popular</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-amber-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-700">Chef's Special</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-700">New Item</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Dining & Events</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Host your next special occasion in our private dining room. Perfect for
            birthdays, anniversaries, and corporate events.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* Cart Notification */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-6 right-6">
          <Link to="/cart" className="relative">
            <div className="bg-amber-500 text-white p-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuPage;