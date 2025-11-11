import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import UpdateFood from "../updatefoods/UpdateFood";

const FoodDetails = () => {
    const [ req,setReq] = useState([])
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [food, setFood] = useState({});
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    fetch(`http://localhost:3000/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data.result))
      .catch((err) => console.log(err));
  }, [id]);


     useEffect(() => {
     // if ( user.email !== food.donator_email) return;
    fetch(`http://localhost:3000/requests?food_id=${id}`)
      .then((res) => res.json())
      .then((data) => setReq(data))
      .catch((err) => console.log(err));
  }, []);




  const handleSubmit =(e)=>{
        e.preventDefault()
        const formData = {
            req_email:user.email,
            req_name:user.displayName,
            req_photo:user.photoURL,
            req_location:e.target.location.value,
            req_reason:e.target.reason.value,
            req_contact:e.target.contact.value,
            food_id: food._id,
            food_status:"Pending",
        }
           fetch('http://localhost:3000/requests',{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(formData)
                })
                .then(res=>  res.json() )
                .then(data=>{
                  console.log(data)
                   toast.success("Requested sucessfully")
                })
                .catch(err=> console.log(err))
            }

           const handleRequest = (requestId, action) => {
                  fetch(`http://localhost:3000/requests/${requestId}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ status: action }), 
                  })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                      toast.success("Request added");
                     const newReq = req.map(r => 
    r._id === requestId ? { ...r, status: action } : r
);
setReq(newReq);
      if (action === "Accepted") {
        fetch(`http://localhost:3000/foods/${food._id}/status`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify ({ food_status: "Donated" }),
        })
          .then(() =>
          {
             const updatedFood = {...food,food_status:"Donated"}
          setFood(updatedFood)
     
    })
    .catch(err => console.log(err));
};
                    })
                     .catch(err => console.log(err));
                  }


  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="relative">
        <img
          src={food.food_image}
          alt={food.food_name}
          className="w-full h-72 object-cover"
        />
        <span className="absolute top-4 right-4 px-3 py-1 text-sm rounded-full bg-green-600 text-white">
          {food.food_status}
        </span>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {food.food_name}
        </h1>
        <p className="text-gray-600 mb-4">{food.additional_notes}</p>

        {/* Donor Info */}
        <div className="flex items-center gap-4 border-t pt-4">
          <img
            src={food.donator_image}
            alt={food.donator_name}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{food.donator_name}</h3>
            <p className="text-sm text-gray-500">{food.donator_email}</p>
          </div>
        </div>

        {/* Request Food Button */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-primary btn-sm hover:bg-purple-500"
          >
            Request Food
          </button>

          {/* Modal */}
          {isOpen && (
            <dialog open className="modal">
                 <div className="modal-box max-w-md">
                <h3 className="font-bold text-lg mb-4">Request This Food</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block mb-1">Location</label>
                    <input
                      type="text"
                      name="location"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Why Need Food?</label>
                    <textarea
                      name="reason"
                      className="textarea textarea-bordered w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Contact No.</label>
                    <input
                      type="number"
                      name="contact"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="modal-action flex justify-end gap-2">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
        
            </dialog>
          )}
        </div>
      </div>


      {/* //requests table for foodss------------- */}

 <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Food Requests</h2>
    <table className="table-auto w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Contact</th>
          <th className="px-4 py-2">Location</th>
          <th className="px-4 py-2">Reason</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
 <tbody>
        {req.map(req => (
          <tr key={req._id} className="border-t">
            <td className="px-4 py-2">{req.
req_name}</td>
            <td className="px-4 py-2">{req.req_contact}</td>
            <td className="px-4 py-2">{req.req_location}</td>
            <td className="px-4 py-2">{req.req_reason}</td>
            <td className="px-4 py-2">{req.food_status}</td>
            <td className="px-4 py-2 flex gap-2">
              {req.food_status === "Pending" && (
                <>
                  <button
                    onClick={() => handleRequest(req._id, "Accepted")}
                    className="btn btn-primary hover:bg-purple-400"
                  >
                    Accept
                      </button>
                  <button
                    onClick={() => handleRequest(req._id, "Rejected")}
                    className="btn btn-primary hover:bg-purple-400"
                  >
                    Reject
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


    </div>
  );
};

export default FoodDetails;
