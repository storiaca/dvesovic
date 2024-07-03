import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../RootLayout.jsx";
import Login from "../pages/Login.jsx";
import Posts from "../pages/Posts.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/posts",
        element: (
          <RouteProtected>
            <Posts />
          </RouteProtected>
        ),
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>,
      },
    ],
  },
]);

function RouteProtected({ children }) {
  if (localStorage.hasOwnProperty("token")) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}
