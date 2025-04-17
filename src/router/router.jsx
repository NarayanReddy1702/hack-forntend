import { createBrowserRouter } from "react-router-dom";
import CommonPage from "../components/Common";
import Home from "../sections/Home";
import Login from "../UI/Login";
import Page1 from "../sections/page1";
import Regions from "../sections/Regions";
import Resources from "../sections/Resources";
import SafeShelters from "../components/SafeShelters";

const router= createBrowserRouter([
    {
        path: "/",
        element: <CommonPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"/Login",
                element:<Login/>,
            },
            {
              path:"/Dashboard",
              element:<Page1/>
            },
            {
                path:"/Regions",
                element:<Regions/>
            },{
                path:"/Resources",
                element:<Resources/>
            },
            {
                path:"/SafeShelters",
                element: <SafeShelters/>
            }
        ]
    }
])

export default router