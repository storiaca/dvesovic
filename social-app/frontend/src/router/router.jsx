import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../RootLayout";
import LoginPage from "../pages/LoginPage";
import PostsPage from "../pages/PostsPage";
import RegisterPage from "../pages/RegisterPage";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: routes.LOGIN.path,
        element: <LoginPage />,
      },
      {
        path: routes.REGISTER.path,
        element: <RegisterPage />,
      },
      {
        path: routes.POSTS.path,
        element: (
          <RouteProtect>
            <PostsPage />
          </RouteProtect>
        ),
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>,
      },
    ],
  },
]);

function RouteProtect({ children }) {
  if (localStorage.hasOwnProperty("token")) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}
