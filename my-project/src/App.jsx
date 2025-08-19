import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import DishDetails from "./pages/DishDetails";
import AdminPanel from "./pages/AdminPanel";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { menuItems as initialMenuItems } from "./data/sampleMenuData";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("authToken") !== null;
  });
  const [dishes, setDishes] = useState(initialMenuItems);

  const handleAddDish = (newDish) => {
    const category = newDish.category.toLowerCase();
    setDishes(prev => ({
      ...prev,
      [category]: [...prev[category], {
        ...newDish,
        id: Date.now().toString(),
        price: parseFloat(newDish.price),
        isNew: true
      }]
    }));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/menu" element={isAuthenticated ? <MenuPage dishes={dishes} /> : <Navigate to="/login" />} />
            <Route path="/dish/:id" element={isAuthenticated ? <DishDetails dishes={dishes} /> : <Navigate to="/login" />} />
            <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
            <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} />
            <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
            <Route 
              path="/login" 
              element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!isAuthenticated ? <Signup setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminPanel onAddDish={handleAddDish} categories={Object.keys(initialMenuItems)} />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>

        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
};

export default App;