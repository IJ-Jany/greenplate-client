import React from 'react';
import { useLoaderData } from 'react-router';
import MyFoodCard from '../../components/MyFoodCard';

const ManageFoods = () => {
     const data = useLoaderData()
    console.log(data)
    return (
  <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage All Foods</h2>

      <div className="overflow-x-auto rounded-lg shadow-md bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Food Name</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Pickup Location</th>
              <th className="px-6 py-3">Expire Date</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food) => (
              <tr
                key={food._id}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="px-6 py-3">
                  <img
                    src={food.image || "https://via.placeholder.com/60"}
                    alt={food.food_name}
                    className="w-14 h-14 rounded object-cover"
                  />
                </td>
                <td className="px-6 py-3 font-semibold">{food.food_name}</td>
                <td className="px-6 py-3">{food.food_quantity}</td>
                <td className="px-6 py-3">{food.pickup_location}</td>
                <td className="px-6 py-3">{food.expire_date}</td>
                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFoods;