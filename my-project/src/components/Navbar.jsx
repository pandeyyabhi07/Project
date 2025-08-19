// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCartPlus, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa"; // Import React Icons

const Navbar = ({ setIsAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userName = localStorage.getItem("userName") || localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaCartPlus className="h-8 w-8 text-amber-600" /> {/* Replace SVG with React Icon */}
              <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:inline">Foodie</span>
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <Link to="/" className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md font-medium">
              Menu
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-500 px-3 py-2 rounded-md font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop Menu - Right side */}
          <div className="hidden md:flex items-center space-x-2 ml-auto">
            {userName && (
              <span className="text-gray-700 px-3 py-2 font-medium">Hi, {userName.split('@')[0]}</span>
            )}
            <Link to="/cart" className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-md font-medium flex items-center">
              <FaCartPlus className="w-5 h-5 mr-1" /> {/* Replace SVG with React Icon */}
              Cart
            </Link>
            {userName && (
              <>
                <button
                  onClick={handleLogout}
                  className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-md font-medium"
                >
                  <FaSignOutAlt className="inline mr-2" /> {/* Replace SVG with React Icon */}
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" /> // Replace X icon with React Icon
              ) : (
                <FaBars className="h-6 w-6" /> // Replace hamburger menu with React Icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/cart" 
              className="block px-3 py-2 bg-amber-100 text-amber-800 rounded-md font-medium items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaCartPlus className="w-5 h-5 mr-2" /> {/* Replace SVG with React Icon */}
              Cart
            </Link>
            {userName && (
              <>
                <Link 
                  to="/admin" 
                  className="block px-3 py-2 bg-gray-100 text-gray-800 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Panel
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 bg-red-100 text-red-800 rounded-md font-medium"
                >
                  <FaSignOutAlt className="inline mr-2" /> {/* Replace SVG with React Icon */}
                  Logout
                </button>
                <div className="px-3 py-2 text-gray-500">
                  Signed in as {userName.split('@')[0]}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
