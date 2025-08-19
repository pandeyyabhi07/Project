// src/pages/AdminPanel.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = ({ onAddMenuItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'starters',
    image: '',
    ingredients: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newItem = {
      ...formData,
      id: Date.now(), // Simple ID generation
      price: parseFloat(formData.price),
      ingredients: formData.ingredients.split(',').map(item => item.trim())
    };

    onAddMenuItem(newItem);
    
    // Reset form
    setFormData({
      name: '',
      description: '',
      price: '',
      category: 'starters',
      image: '',
      ingredients: ''
    });
    
    alert('Recipe added successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Add New Recipe</h1>
          <Link to="/menu" className="text-amber-600 hover:text-amber-700">
            Back to Menu
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Dish Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="starters">Starters</option>
                <option value="mains">Main Courses</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Ingredients (comma separated)
              </label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
                rows={2}
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;