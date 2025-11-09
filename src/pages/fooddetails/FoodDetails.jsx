import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const FoodDetails = () => {
 const {id} = useParams()
    const[food,setFood] = useState({})
   const navigate = useNavigate()

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
    },[id])
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
        <div>
          <h1>{food.food_name}</h1>
          <img src={food.food_image} alt="" />
          <p>{food.food_quantity}</p>
          <Link to={`/update-food/${food._id}`}>Update</Link>
<button onClick={handleDelete}>delete</button>
        </div>
    );
};

export default FoodDetails;