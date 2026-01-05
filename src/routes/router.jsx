import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import AddFood from '../pages/add-food/AddFood'
import ManageFoods from '../pages/manage-foods/ManageFoods'
import MyRequestes from '../pages/my-requests/MyRequests'
import FoodDetails from "../pages/fooddetails/FoodDetails";
import UpdateFood from "../pages/updatefoods/UpdateFood";
import PrivateRoute from "./PrivateRoute";
import AvailableFoods from "../pages/available-foods/AvailableFoods";
import Motion from "../components/Motion";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Guidelines from "../pages/guidelines/Guidelines";


export const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    {
        path:'/',
        Component:Home,
        loader:()=> fetch('https://green-plate-server.vercel.app/highest-foods')
    },
     {
        path:'/available-foods',
       element:<AvailableFoods></AvailableFoods>,
        loader:()=> fetch('https://green-plate-server.vercel.app/foods')
    },
     {
        path:'/about',
       element:<About/>
    },
     {
        path:'/contact',
       element:<Contact/>
    },
    {
        path:'/guidelines',
       element:<Guidelines/>
    },
    {
      path:'/add-food',
      element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
    },
    {
      path:'/manage-foods',
      element:<PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>,
     // loader:()=> fetch('https://green-plate-server.vercel.app/my-foods')
    },
     {
      path:'/my-requests',
     element:<PrivateRoute><MyRequestes></MyRequestes></PrivateRoute>
    },
     {
      path:'/food-details/:id',
      element:<FoodDetails></FoodDetails>,
      loader:({params})=> fetch(`https://green-plate-server.vercel.app/foods/${params.id}`)
    },
   
     {
      path:'/update-food/:id',
      element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
      loader:({params})=> fetch(`https://green-plate-server.vercel.app/foods/${params.id}`)
    },
   
     {
        Component:Motion,
       loader:()=> fetch('https://green-plate-server.vercel.app/foods')
    },
   
   ]
  },
  {
    path:'/auth/login',
    Component:Login
  },
   {
    path:'/auth/register',
    Component:Register
  },
  {
    path:'*',
    Component:Error
  }
]);