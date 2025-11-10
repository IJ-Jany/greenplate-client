import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';


const AddFood = () => {
    const{user} = use(AuthContext)
    console.log(user)
    const handleSubmit =(e)=>{
        e.preventDefault()
        const formData = {
            food_name:e.target.name.value,
            food_image:e.target.image.value,
            food_quantity:e.target.quantity.value,
            pickup_location:e.target.location.value,
            expire_date:e.target.expireDate.value,
            additional_notes:e.target.notes.value,
            food_status:"Available",
            donator_name:user.displayName,
            donator_email:user.email,
            donator_image:user.photoURL
        }
        fetch('http://localhost:3000/foods',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(res=>  res.json() )
        .then(data=>{
          console.log(data)
           toast.success("Added sucessfully")
        })
        .catch(err=> console.log(err))
    }
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          🍲 Food Listing Form
        </h2>

        {/* Food Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Food Name
          </label>
          <input
            type="text"
            name="name"
            // value={formData.foodName}
            // onChange={handleChange}
           
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        {/* Food Image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Food Image 
          </label>
          <input
            type="url"
            name="image"
            // value={formData.foodImage}
            // onChange={handleChange}
            placeholder=""
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
         
        </div>

        {/* Food Quantity */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Food Quantity
          </label>
          <input
            type="text"
            name="quantity"
            // value={formData.quantity}
            // onChange={handleChange}
            placeholder=""
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        {/* Pickup Location */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Pickup Location
          </label>
          <input
            type="text"
            name="location"
            // value={formData.location}
            // onChange={handleChange}
            placeholder="Enter pickup address"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        {/* Expire Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Expire Date
          </label>
          <input
            type="date"
            name="expireDate"
            // value={formData.expireDate}
            // onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        {/* Additional Notes */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Additional Notes
          </label>
          <textarea
            name="notes"
            // value={formData.notes}
            // onChange={handleChange}
            rows="4"
            placeholder="Add any special instructions..."
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn btn-primary hover:bg-purple-400 text-white font-semibold py-2 rounded-md  transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>


    );
};

export default AddFood;