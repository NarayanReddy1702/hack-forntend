import { createBrowserRouter } from "react-router-dom";
import CommonPage from "../components/Common";
import Home from "../sections/Home";
import Login from "../UI/Login";
import Page1 from "../sections/page1";
import Regions from "../sections/Regions";

import SafeShelters from "../components/SafeShelters";
import FirstAidGuide from "../components/FirstAidSteps";
import ReportAProblem from "../sections/ReportAProblem";

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
              path:"/Home",
              element:<Home/>
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
            },
            {
                path:"/SafeShelters",
                element: <SafeShelters/>
            },
            {
                path: "/FirstAidGuide",
                element: <FirstAidGuide/>
            },
            {
                path:"/ReportAProblem",
                element:<ReportAProblem/>
            }
        ]
    }
])

export default router