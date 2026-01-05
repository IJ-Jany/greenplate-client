import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";
import { AuthContext } from '../../context/AuthContext';
import Loader from '../../components/Loader';

const ManageFoods = () => {
  const {user,loading} = use(AuthContext)
    //  const data = useLoaderData()
    const[data,setData] = useState([])
     const [foods,setFoods] = useState(data)
     useEffect(()=>{
    if(user){
      fetch(`https://green-plate-server.vercel.app/my-foods?email=${user.email}`)
      .then(res=>res.json())
      .then(data=>setData(data))
    }
     },[user])


   const navigate=useNavigate()
          const handleDelete =(id)=>{
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
              fetch(`https://green-plate-server.vercel.app/foods/${id}`,{
                    method:"DELETE",
                })
                .then(res=> res.json())
                .then(data=>{
                      if (data.success) {
              setFoods(foods.filter((f) => f._id !== id));
            }
                    navigate("/")
                    //console.log(data)
                     Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
                })
                .catch(err=> 
                  console.log(err)
                )
           
          }
        });
            }

if(loading){
  return <Loader/>
}
 
    return (
  <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage All Foods</h2>

      <div className="overflow-x-auto  rounded-lg shadow-md bg-white">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 md:px-6 py-3">Image</th>
              <th className="px-4 md:px-6 py-3">Food Name</th>
              <th className="px-4 md:px-6 py-3">Quantity</th>
              <th className="px-4 md:px-6 py-3">Pickup Location</th>
              <th className="px-4 md:px-6 py-3">Expire Date</th>
              <th className="px-4 md:px-6 py-3 text-center">Actions</th>
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
                    src={food.food_image }
                    alt={food.food_name}
                    className="w-14 h-14 rounded object-cover"
                  />
                </td>
                <td className="px-6 py-3 font-semibold">{food.food_name}</td>
                <td className="px-6 py-3">{food.food_quantity}</td>
                <td className="px-6 py-3">{food.pickup_location}</td>
                <td className="px-6 py-3">{food.expire_date}</td>
                <td className="px-6 py-3 text-center">
                  <div className="flex flex-col sm:flex-row justify-center gap-2">
                    <button onClick={() => handleDelete(food._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                    <button onClick={() => navigate(`/update-food/${food._id}`)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
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