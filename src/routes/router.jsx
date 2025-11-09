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
import DeleteFood from "../pages/deletefood/DeleteFood";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   children:[
    {
        path:'/',
        Component:Home,
        loader:()=> fetch('http://localhost:3000/foods')
    },
    {
      path:'/add-food',
      Component:AddFood
    },
     {
      path:'/manage-foods',
      Component:ManageFoods
    },
     {
      path:'/my-requests',
      Component:MyRequestes
    },
     {
      path:'/food-details/:id',
      Component:FoodDetails
    },
     {
      path:'/update-food/:id',
      Component:UpdateFood,
      loader:({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
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