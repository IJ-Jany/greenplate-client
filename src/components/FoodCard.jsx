import React from 'react';
import { Link } from 'react-router';

const FoodCard = ({food}) => {
    const{_id,food_image, food_name, food_quantity, pickup_location, food_status } = food
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={food_image}
     />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{food_name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
        <h1>{pickup_location}</h1>
        <h1>{food_quantity}</h1>
      <button className="btn btn-primary">{food_status}</button>

       <Link to={`/food-details/${_id}`}><a>View details</a></Link>
    </div>
  </div>
</div>
    );
};

export default FoodCard;