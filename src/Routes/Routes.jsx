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


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            
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
           loader:()=> fetch('http://localhost:5000/toys')

        },
        {
           path: '/toyproducts',
           element: <ToyProducts></ToyProducts>,
        },
        {
           path: '/allToys',
           element: <AllToys></AllToys>,
           loader: ()=> fetch('http://localhost:5000/toys')
        },
        {
          path: '/addToy',
          element: <AddToys></AddToys>,
        }
      ]
    },
  ]);

export default router;