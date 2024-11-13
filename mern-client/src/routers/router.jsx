import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "../App"
import Home from "../home/Home";
import Shop from "../Shop/Shop";
import Blog from "../Components/Blog";
import About from "../Components/About";
import SingleBook from "../Shop/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../Components/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../Components/Login";
import Logout from "../Components/Logout"
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[{
        path:"/",
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/book/:id',
        element:<SingleBook/>,
        loader:({params})=> fetch(`http://localhost:5173/book/${params.id}`)
      },
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[{
        path:"/admin/dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>
      },
      {
        path:"/admin/dashboard/upload",
        element:<UploadBook/>
      },
      {
        path:"/admin/dashboard/manage",
        element:<ManageBook/>
      },
      {
        path:"/admin/dashboard/edit-books/:id",
        element:<EditBooks/>,
        loader:({params})=> fetch(`http://localhost:5173/book/${params.id}`)
      }]
    },
    {
      path:"sign-up",
      element:<Signup/>
    },{
      path:"login",
      element:<Login/>
    },{
      path:"logout",
      element:<Logout/>
    }
  ]);

  export default router;