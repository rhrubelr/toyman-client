import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Registration from "../Registration/Registration";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";


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
          path: '/registration',
          element: <Registration></Registration>,
        },
        {
           path: '/myToys',
           element: <MyToys></MyToys>,
        },
        {
           path: '/allToys',
           element: <AllToys></AllToys>,
        },
        {
          path: '/addToy',
          element: <AddToys></AddToys>,
        }
      ]
    },
  ]);

export default router;