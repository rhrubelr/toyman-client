import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import ToyProducts from "../pages/ToyProducts/ToyProducts";
import Register from "../pages/Register/Register";
import ViewDetails from "../pages/VeiwDetails/ViewDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('https://assignment-11-server-seven-silk.vercel.app/products')
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
           path: '/myToys',
           element: <MyToys></MyToys>,
           loader:()=> fetch('https://assignment-11-server-seven-silk.vercel.app/toys')

        },
        {
           path: '/toyproducts',
           element: <ToyProducts></ToyProducts>,
        },
        {
           path: '/allToys',
           element: <AllToys></AllToys>,
           loader: ()=> fetch('https://assignment-11-server-seven-silk.vercel.app/toys')
        },
        {
          path: '/addToy',
          element: <AddToys></AddToys>,
        },
        {
          path: 'viewDetails/:id',
          element: <ViewDetails></ViewDetails>,
          loader: ({params})=> fetch(`https://assignment-11-server-seven-silk.vercel.app/products/${params.id}`)
        }
      ]
    },
  ]);

export default router;