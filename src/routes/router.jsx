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


export const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    {
        path:'/',
        Component:Home,
        loader:()=> fetch('http://localhost:3000/highest-foods')
    },
     {
        path:'/available-foods',
       element:<AvailableFoods></AvailableFoods>,
        loader:()=> fetch('http://localhost:3000/foods')
    },
    {
      path:'/add-food',
      element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
    },
    {
      path:'/manage-foods',
      element:<PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>,
     // loader:()=> fetch('http://localhost:3000/my-foods')
    },
     {
      path:'/my-requests',
     element:<PrivateRoute><MyRequestes></MyRequestes></PrivateRoute>
    },
     {
      path:'/food-details/:id',
      element:<PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
      loader:({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
    },
   
     {
      path:'/update-food/:id',
      element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
      loader:({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
    },
   
     {
        Component:Motion,
       loader:()=> fetch('http://localhost:3000/foods')
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