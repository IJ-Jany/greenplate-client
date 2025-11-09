import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
 const {signInUser} = use(AuthContext)
 const navigate = useNavigate()
 const handleLogin =(e)=>{
  e.preventDeafult()
  const email = e.target.email.value
  const password = e.target.password.value
  signInUser(email,password)
  .then(res=>{
    console.log(res)
    navigate('/')
  }).catch(err=>{
    console.log(err)
  })
 }
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleLogin}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
           <a>dont have an account? please <Link to="/auth/register">Register</Link></a>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;