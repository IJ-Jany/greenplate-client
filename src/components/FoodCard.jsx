import React from 'react';
import { Link } from 'react-router';

const FoodCard = ({food}) => {
  
    const{_id,food_image,additional_notes,donator_image, food_name,expire_date, food_quantity, pickup_location, food_status, donator_email} = food
    return (
<div className="card bg-base-100 w-full max-w-sm shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

  <figure className="w-full h-48 overflow-hidden">
    <img src={food_image}  alt={food_name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
  </figure>
  <div className="card-body flex flex-col">
    <h2 className="card-title text-lg font-semibold text-gray-800">{food_name}</h2>
    <p className="text-sm text-gray-600 mb-2"> {additional_notes } </p>
    <div className="flex items-center gap-3 mb-3">
      <img
        src={donator_image} className="w-10 h-10 rounded-full border border-gray-200 object-cover"/>
      <div><p className="text-sm font-medium text-gray-700">{donator_email}</p></div>
    </div>



    <div className="mt-auto flex flex-wrap justify-between items-center gap-3 text-sm">
      <div className="flex flex-col gap-1">
        <span><strong>Pickup:</strong> {pickup_location}</span>
        <span><strong>Quantity:</strong> {food_quantity}</span>
        <span><strong>Expires:</strong> {expire_date}</span>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <button className='btn btn-primary hover:bg-purple-400'>  {food_status}</button>
       
 <Link to={`/update-food/${_id}`} className="btn btn-outline btn-sm border-purple-600 text-purple-700 hover:bg-purple-100" >  Update </Link>
                <Link to={`/food-details/${_id}`} className="text-sm text-purple-700 hover:underline" >  View details </Link>
        
        
    
      </div>
    </div>



  </div>
</div>


    );
};

export default FoodCard;