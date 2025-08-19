// src/data/sampleMenuData.js
export const menuCategories = [
  { id: "all", name: "All Menu" },
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

export const menuSections = [
  { id: "food", name: "Food Menu" },
  { id: "drinks", name: "Drinks Menu" },
  { id: "specials", name: "Chef's Specials" },
  { id: "seasonal", name: "Seasonal Offers" },
];

export const menuItems = {
  starters: [
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Crispy risotto balls with black truffle and mozzarella",
      price: 12.5,
      isPopular: true,
      isVegetarian: true,
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/11/truffle-arancini-933c2ac.jpg",
    },
    {
      id: 2,
      name: "Tuna Tartare",
      description: "Fresh tuna with avocado, sesame and soy dressing",
      price: 16.0,
      isNew: true,
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    },
  ],
  mains: [
    {
      id: 3,
      name: "Filet Mignon",
      description: "8oz grass-fed beef with truffle mashed potatoes",
      price: 34.0,
      isChefSpecial: true,
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    },
    {
      id: 4,
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms and parmesan",
      price: 22.0,
      isVegetarian: true,
      image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
    },
  ],
  desserts: [
    {
      id: 5,
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla bean ice cream",
      price: 10.5,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    },
    {
      id: 6,
      name: "Crème Brûlée",
      description: "Classic vanilla custard with caramelized sugar top",
      price: 9.5,
      isVegetarian: true,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
  ],
  drinks: [
    {
      id: 7,
      name: "Signature Cocktails",
      description: "Ask your server about today's special creations",
      price: 14.0,
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    },
    {
      id: 8,
      name: "Wine Selection",
      description: "Extensive list of international wines available",
      price: "Bottle from $35",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Crispy risotto balls with black truffle and mozzarella",
      price: 12.5,
      isPopular: true,
      isVegetarian: true,
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/11/truffle-arancini-933c2ac.jpg",
    },
  ],

  
};
export const categories = ["starters", "mains", "desserts", "drinks"];