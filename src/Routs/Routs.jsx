import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Home/Services/Services";
import Login from "../Pages/Login/Login";
import About from "../Pages/Home/About/About";
import SignUp from "../Pages/SignUp/SignUp";
import BookNow from "../Pages/Home/Services/ServiceCard/BookNow/BookNow";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
        path: 'services',
        element: <Services></Services>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path:'booknow/:id',
        element:<PrivateRoute><BookNow></BookNow></PrivateRoute>,
        loader:({params})=> fetch(`https://car-solution-server-r58db1bh3-maruf-hussain.vercel.app/services/${params.id}`)
      },
      {
        path:'bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      }
    ]
  },
]);
export default router;
