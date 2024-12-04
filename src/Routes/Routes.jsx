import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import Home from "../Pages/Home";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts />,
      children:[
       {
         path:"/",
         element:<Home />,

       }
      ]

      
    }
  ]);

export default Routes;