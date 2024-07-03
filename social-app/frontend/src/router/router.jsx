import {createBrowserRouter, Navigate, useNavigate} from "react-router-dom";
import RootLayout from "../RootLayout";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import {useEffect} from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Login/>
            },
            {
                path: "/posts",
                element: <RouteProtect>
                    <Posts/>
                </RouteProtect>
            },
            {
                path: "/dashboard",
                element: <h1>Dashboard</h1>
            }
        ]
    }
]);

function RouteProtect({children}) {
    if (localStorage.hasOwnProperty("token")) {
        return children;
    } else {
        return <Navigate to={"/"}/>;
    }
}