import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";  // Import the React Icon

const Home = () => {
  const specialDishes = [
    {
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle sauce and parmesan",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    },
    {
      name: "Seafood Platter",
      description: "Fresh catch of the day with seasonal seafood",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    },
    {
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla bean ice cream",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-amber-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Welcome to Our Restaurant
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience the finest dining with our carefully crafted menu using the freshest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/menu"
              className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600"
            >
              View Menu
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-100 border border-gray-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Taste the Difference
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Authentic flavors crafted with passion since 2010
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/menu"
                className="px-8 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors text-lg"
              >
                View Menu
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Specials Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Today's Specials</h2>
            <p className="mt-3 text-xl text-gray-600">
              Chef's recommendations for today
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <Link
                    to="/menu"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaQuoteLeft className="w-12 h-12 mx-auto text-amber-400 mb-6" /> {/* Replaced SVG with React Icon */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
            "The dining experience here is unparalleled. Every dish tells a story of
            passion and tradition. The seafood pasta is to die for!"
          </p>
          <div>
            <p className="text-lg font-medium text-gray-900">Sarah Johnson</p>
            <p className="text-gray-600">Food Critic, Epicurean Magazine</p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="mt-3 text-xl text-gray-600">
              Join us for these special occasions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wine Pairing Dinner",
                date: "June 15, 2023",
                description: "Five-course meal with sommelier-selected wines",
                image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
              },
              {
                title: "Live Jazz Nights",
                date: "Every Friday",
                description: "Smooth jazz with our signature cocktails",
                image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
              },
              {
                title: "Chef's Table Experience",
                date: "By Reservation",
                description: "Exclusive kitchen-side dining with the chef",
                image: "https://images.unsplash.com/photo-1555244162-803834f70033",
              },
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
