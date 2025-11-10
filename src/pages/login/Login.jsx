import React, { use } from 'react';
import { Link, useNavigate,useLocation } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from "react-toastify";


const Login = () => {
 const {signInUser} = use(AuthContext)
 const navigate = useNavigate()
 const location = useLocation()

 const handleLogin =(e)=>{
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value
  signInUser(email,password)
  .then(res=>{
    console.log(res)
    toast.success("Login Successful");
    navigate(location.state?.from?.pathname ||'/')
  }).catch(err=>{
    console.log(err)
    toast.error("Invalid email or password. Please try again.");
  })
 }
    return (
       <div className="hero bg-base-200 min-h-screen">
 
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleLogin}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
           <button  className='btn btn-primary hover:bg-purple-400'>Login</button>
           <a>Dont have an account? please <Link to="/auth/register"  className='text-purple-900'>Register</Link></a>
        </fieldset>
       </form>
      </div>
    </div>
</div>
    );
};

export default Login;