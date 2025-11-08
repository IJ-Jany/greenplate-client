import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    {
        path:'/',
        Component:Home,
        loader:()=> fetch('http://localhost:3000/foods')
    }
   ]
  },
  {
    path:'/auth/login',
    Component:Login
  },
   {
    path:'/auth/register',
    Component:Register
  }
]);