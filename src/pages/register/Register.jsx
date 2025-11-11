import React, { use, useContext } from 'react';
import { Link } from 'react-router';
import { useNavigate } from "react-router";
import { AuthContext } from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
   const handleRegister = (e) => {
  e.preventDefault();

  const email = e.target.elements.email?.value.trim() || "";
  const password = e.target.elements.password?.value.trim() || "";
 // const name = e.target.elements.name?.value.trim() || "";
 // const photo = e.target.elements.photo?.value.trim() || "";

  // Password: at least one lowercase, one uppercase, one digit, one special (any non-alphanumeric), min length 6
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/

  if (!password) {
    toast.error("Please enter a password.");
    return;
  }

  if (!passwordRegex.test(password)) {
    toast.error(
      "Password must include at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 6+ characters long."
    );
    return;
  }

  createUser(email, password)
    .then((result) => {
      console.log(result);
      toast.success("Registration Successful");
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
      toast.error(error.message || "Registration failed");
    });
};
    return (
        <div className="hero bg-base-200 min-h-screen">
  
  
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleRegister}>
         <fieldset className="fieldset">
                     <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Enter Your name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
         <label className="label">PhotoURL</label>
          <input name='photo' type="text" className="input" placeholder="Place Your PhotoURL" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <button  className='btn btn-primary hover:bg-purple-400'>Register</button>
          <p>Already have an account? please <Link to="/auth/login" className='text-purple-900'>Login</Link></p>
          <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </fieldset>
       </form>
      </div>
    </div>
    <ToastContainer/>
</div>

    );
};

export default Register;