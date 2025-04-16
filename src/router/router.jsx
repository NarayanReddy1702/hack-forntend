import { createBrowserRouter } from "react-router-dom";
import CommonPage from "../components/Common";
import Home from "../sections/Home";
import Login from "../UI/Login";
import Page1 from "../sections/page1";

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
            }
        ]
    }
])

export default router