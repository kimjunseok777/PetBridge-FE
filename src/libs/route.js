import {createBrowserRouter} from "react-router-dom";
import CertifyPage from "../pages/Certify-page/Certify";
import List from "../pages/list-page/list";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <CertifyPage/>
    },
    {
        path: "/list",
        element: <List/>
    }
])




