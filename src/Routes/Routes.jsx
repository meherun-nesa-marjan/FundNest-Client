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
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";
import Blogs from "../Pages/Blogs";
import BlogDetails from "../Pages/BlogDetails";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts />,
     // errorElement: <Error />,
      children:[
       {
         path:"/",
         element:<Home />,
       },
      {
        path:"/campaigns",
        element: <Campaigns />,
        loader: () => fetch('https://assignment-10-silk.vercel.app/campaignData'),
      },
      {
        path:"/About",
        element:<About />
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/Support",
        element:<Support />
      },
      {
        path:"/Blog",
        element:<Blogs />
      },
      {
        path:"/blogs/:id",
        element:<BlogDetails />
      },
      
      {
        path:"/addCampaign",
        element: <Private><AddCampaign /></Private> ,
      },
      {
        path:"/myCampaign/:email",
        element: <Private><MyCampain /></Private> ,
        loader:({params}) => fetch(`https://assignment-10-silk.vercel.app/myCampaign/${params.email}`)
      },
      {
        path:"/UpdateCampaign/:id",
        element: <Private><UpdateCampaign /></Private>,
        loader: ({params}) => fetch(`https://assignment-10-silk.vercel.app/campaign/${params.id}`)
      },
      {
        path:"/campaign/:id" ,
        element: <Private> <CampaignDetails /> </Private>,
        loader: ({params}) => fetch(`https://assignment-10-silk.vercel.app/campaignData/${params.id}`)
        
      },
      {
        path:"/myDonations/:email",
        element: <Private><MyDonations /></Private> ,
        loader:({params}) => fetch(`https://assignment-10-silk.vercel.app/myDonations/${params.email}`)
       
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