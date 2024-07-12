import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../RootLayout";
import LoginPage from "../pages/LoginPage";
import PostsLayout from "../pages/PostsLayout";
import RegisterPage from "../pages/RegisterPage";
import { routes } from "./routes";
import Posts from "../pages/Posts";
import PostByTag from "../pages/PostByTag";
import SinglePost from "../pages/SinglePost";
import SearchPosts from "../pages/SearchPost";

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
        element: <PostsLayout />,
        children: [
          {
            path: routes.POSTS.path,
            element: <Posts />,
          },
          {
            path: routes.POST_TAG.path,
            element: <PostByTag />,
          },
          {
            path: routes.POSTS_SEARCH.path,
            element: <SearchPosts />,
          },
        ],
      },
      {
        path: routes.SINGLE_POST.path,
        element: <SinglePost />,
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
