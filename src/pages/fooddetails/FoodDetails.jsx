import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const FoodDetails = () => {
    const {id} = useParams()
    const[food,setFood] = useState({})
   

    useEffect(()=>{
        fetch(`http://localhost:3000/foods/${id}`,{
            headers:{
                authorixation:`Bearer ${UserActivation.accessToken}`
            },
        })
        .then(res=> res.json())
        .then(data=>{
            setFood(data.result)
        })
    })
    return (
        <div>
          <h1>{food.food_name}</h1>
          <img src={food.food_image} alt="" />
          <p>{food.food_quantity}</p>
          <Link to={`/update-food/${food._id}`}>Update</Link>
<button>delete</button>
        </div>
    );
};

export default FoodDetails;