import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ViewRecipes from "../pages/Shared/Chef/ViewRecipes";
import ViewRecipieDetails from "../pages/Shared/Chef/ViewRecipieDetails";
import Errorpage from "../pages/Errorpage.jsx/Errorpage";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to="/home"></Navigate>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    
    {
        path: "/home",
        element: <Main></Main>,
        children: [
            
            {
                path: '/home',
                element: <Home></Home>
            },
            
        ]
    },
    {
        path: 'chef',
        element: <PrivateRoutes><ViewRecipieDetails></ViewRecipieDetails></PrivateRoutes>,
        children: [
            {
                path: ':id',
                element: <ViewRecipes></ViewRecipes>,
                loader: ({ params }) => fetch(`https://delicious-assignment-serversite-haquearif143-gmailcom.vercel.app/chef/${params.id}`)
            }
        ]
    },
    {
        path:'*',
        element:<Errorpage></Errorpage>
    }
])

export default router;