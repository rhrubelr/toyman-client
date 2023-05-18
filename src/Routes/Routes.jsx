import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Registration from "../Registration/Registration";


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
        }
      ]
    },
  ]);

export default router;