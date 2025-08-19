// src/pages/About.jsx
import { Link } from "react-router-dom";
import { FaQuoteLeft } from 'react-icons/fa'; // Import the quote icon

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-amber-50 rounded-2xl overflow-hidden shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Foodie began as a small family-owned restaurant with a passion for creating 
                authentic, delicious meals that bring people together.
              </p>
              <Link 
                to="/menu" 
                className="self-start px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
              >
                Explore Our Menu
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" 
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc" 
              alt="Chef preparing food"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We believe food should be both delicious and nourishing. That's why we source only the freshest 
                ingredients from local farmers and producers we know and trust.
              </p>
              <p>
                Our chefs combine traditional techniques with innovative approaches to create dishes that are 
                both familiar and exciting. Every plate is prepared with care and attention to detail.
              </p>
              <p>
                Sustainability is at our core. We minimize food waste, use eco-friendly packaging, and support 
                ethical farming practices.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Chef Maria Rodriguez",
                role: "Executive Chef",
                bio: "With over 20 years of culinary experience, Maria brings creativity and precision to every dish.",
                img: "https://images.unsplash.com/photo-1601315488950-3b5047998b38"
              },
              {
                name: "David Chen",
                role: "Sous Chef",
                bio: "Specializing in Asian fusion cuisine, David adds unique flavors to our menu.",
                img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
              },
              {
                name: "Sophie Laurent",
                role: "Pastry Chef",
                bio: "French-trained pastry chef creating our delicious desserts and baked goods.",
                img: "https://images.unsplash.com/photo-1551836022-d5d44eef8b70"
              },
              {
                name: "James Wilson",
                role: "Restaurant Manager",
                bio: "Ensuring every guest has an exceptional dining experience.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-amber-50 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The best dining experience I've had this year! The flavors were incredible.",
                author: "Sarah Johnson",
                role: "Food Critic"
              },
              {
                quote: "Every dish tells a story. You can taste the passion in the food.",
                author: "Michael Tan",
                role: "Regular Customer"
              },
              {
                quote: "Perfect for special occasions. The service is impeccable.",
                author: "Emma Davis",
                role: "Local Guide"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <FaQuoteLeft className="w-8 h-8 text-amber-400 mb-4" /> {/* React Icon here */}
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Us</h2>
            <div className="space-y-4 text-gray-600 mb-6">
              <p>
                We're located in the heart of downtown, with a warm and inviting atmosphere perfect for 
                family dinners, romantic dates, or business lunches.
              </p>
              <p>
                <strong>Hours:</strong><br />
                Monday - Thursday: 11am - 10pm<br />
                Friday - Saturday: 11am - 11pm<br />
                Sunday: 10am - 9pm
              </p>
              <p>
                <strong>Address:</strong><br />
                123 Culinary Avenue<br />
                Foodie City, FC 10001
              </p>
            </div>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
            >
              Get Directions
            </Link>
          </div>
          <div className="h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179329!2d-73.987844924525!3d40.74844047138971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTQuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
