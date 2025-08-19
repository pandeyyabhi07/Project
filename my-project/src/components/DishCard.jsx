import { Link } from "react-router-dom";

const DishCard = ({ dish }) => {
  return (
    <Link to={`/dish/${dish.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
            <span className="text-lg font-bold text-amber-600">${dish.price.toFixed(2)}</span>
          </div>
          <p className="text-gray-600 mt-2 line-clamp-2">{dish.description}</p>
          <span className="inline-block mt-3 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
            {dish.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DishCard;