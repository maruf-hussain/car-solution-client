import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Home/Services/Services";
import Login from "../Pages/Login/Login";
import About from "../Pages/Home/About/About";
import SignUp from "../Pages/SignUp/SignUp";
import BookNow from "../Pages/Home/Services/ServiceCard/BookNow/BookNow";

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
        element:<BookNow></BookNow>,
        loader:({params})=> fetch(`http://localhost:7000/services/${params.id}`)
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
