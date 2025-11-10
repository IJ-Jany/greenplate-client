import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const FoodDetails = () => {
 const {id} = useParams()
    const[food,setFood] = useState({})
   const navigate = useNavigate()
   const {user} = use(AuthContext)


        fetch(`http://localhost:3000/foods/${id}`)
        .then(res=> res.json())
        .then(data=>{
            setFood(data.result)
        })
        .catch(err=>{
            console.log(err)
        })
   
    console.log(food)
     const handleDelete =()=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
      fetch(`http://localhost:3000/foods/${food._id}`,{
            method:"DELETE",
        })
        .then(res=> res.json())
        .then(data=>{
            navigate("/")
            console.log(data)
             Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        })
        .catch(err=> console.log(err))
   
  }
});
    }
   
    return (
       <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="relative">
        <img src={food.food_image} alt={food.food_name} className="w-full h-72 object-cover"  />
        {/* className={`absolute top-4 right-4 px-3 py-1 text-sm rounded-full ${food.food_status === "Available"
              ? "bg-green-600 text-white"
              : "bg-gray-400 text-white"
          }`} */}
        <span className='absolute top-4 right-4 px-3 py-1 text-sm rounded-full  bg-green-600 text-white' > {food.food_status} </span>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2"> {food.food_name} </h1>

        <p className="text-gray-600 mb-4">{food.additional_notes}</p>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-6">
          <div>
            <p>  <strong>Quantity:</strong> {food.food_quantity} </p>
            <p>
              <strong>Pickup:</strong> {food.pickup_location}
            </p>
          </div>
          <div>
            <p>
              <strong>Expires:</strong> {food.expire_date}
            </p>
            <p>
              <strong>Status:</strong> {food.food_status}
            </p>
          </div>
        </div>

        {/* Donor Info */}
        <div className="flex items-center gap-4 border-t pt-4">
          <img
            src={food.donator_image}
            alt={food.donator_name}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <h3 className="font-semibold text-gray-800">
              {food.donator_name}
            </h3>
            <p className="text-sm text-gray-500">{food.donator_email}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">

          <button
            
            className="btn btn-primary btn-sm hover:bg-purple-500"
          >
            Request Food
          </button>
        </div>
      </div>
    </div>
    );
};

export default FoodDetails;