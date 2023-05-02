import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ViewRecipes from "../pages/Shared/Chef/ViewRecipes";
import Chef from "../pages/Shared/Chef/Chef";
import ViewRecipieDetails from "../pages/Shared/Chef/ViewRecipieDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: 'chef',
        element: <ViewRecipieDetails></ViewRecipieDetails>,
        children: [
            {
                path: ':id',
                element: <ViewRecipes></ViewRecipes>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
])

export default router;