import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import Home from "../Pages/Home";
import Campaigns from "../Components/Campaigns";
import AddCampaign from "../Components/AddCampaign";
import MyCampain from "../Components/MyCampain";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Forgetpass from "../Components/Forgetpass";
import Private from "../Components/Private";
import CampaignDetails from "../Components/CampaignDetails";
import MyDonations from "../Components/MyDonations";
import UpdateCampaign from "../Components/UpdateCampaign";
import Error from "../Pages/Error";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts />,
      errorElement: <Error />,
      children:[
       {
         path:"/",
         element:<Home />,
       },
      {
        path:"/campaigns",
        element: <Campaigns />,
        loader: () => fetch('http://localhost:5000/campaignData'),
      },
      {
        path:"/addCampaign",
        element: <Private><AddCampaign /></Private> ,
      },
      {
        path:"/myCampaign/:email",
        element: <Private><MyCampain /></Private> ,
        loader:({params}) => fetch(`http://localhost:5000/myCampaign/${params.email}`)
      },
      {
        path:"/UpdateCampaign/:id",
        element: <Private><UpdateCampaign /></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
      },
      {
        path:"/campaign/:id" ,
        element: <Private> <CampaignDetails /> </Private>,
        loader: ({params}) => fetch(`http://localhost:5000/campaignData/${params.id}`)
        
      },
      {
        path:"/myDonations/:email",
        element: <Private><MyDonations /></Private> ,
        loader:({params}) => fetch(`http://localhost:5000/myDonations/${params.email}`)
       
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

      
    }
  ]);

export default Routes;