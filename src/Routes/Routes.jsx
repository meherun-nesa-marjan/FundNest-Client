import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import Home from "../Pages/Home";
import Campaigns from "../Components/Campaigns";
import AddCampaign from "../Components/AddCampaign";
import MyCampain from "../Components/MyCampain";
import MyDonations from "../Components/MyDonations";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Forgetpass from "../Components/Forgetpass";
import Private from "../Components/Private";
import CampaignDetails from "../Providers/CampaignDetails";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts />,
      children:[
       {
         path:"/",
         element:<Home />,
         children:[
          {
            path:"/campaigns",
            element: <Campaigns />,
            loader: () => fetch('http://localhost:5000/campaignData'),
          },
          {
            path:"/addCampaign",
            element: <AddCampaign /> ,
          },
          {
            path:"/myCampaign",
            element: <MyCampain /> ,
          },
          {
            path:"/campaign/:id",
            element: <Private><CampaignDetails /></Private>,
            loader: () => fetch('http://localhost:5000/campaignData'),
          },
          {
            path:"/myDonations",
            element: <MyDonations /> ,
          },
          {
            path:"/Login",
            element: <Login />,
          },
          {
            path:"/Register",
            element: <Register />,
          },
          {
            path: "/ForgetPassword",
            element: <Forgetpass />,
          },
         ]
       },
      ]

      
    }
  ]);

export default Routes;