import React from 'react';

const MyFoodCard = ({ food }) => {
  return (
     <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <img
        src={food.image || "https://via.placeholder.com/100"}
        alt={food.food_name}
        className="w-20 h-20 object-cover rounded mb-2"
      />
      <h3 className="font-bold text-lg">{food.food_name}</h3>
      <p>Quantity: {food.food_quantity}</p>
      <p>Pickup: {food.pickup_location}</p>
      <p>Expire: {food.expire_date}</p>
      <div className="flex gap-2 mt-2">
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">Update</button>
      </div>
    </div>
  
  );
};

export default MyFoodCard;
