import { Outlet } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";
axios.interceptors.request.use((config) => {
  if (localStorage.hasOwnProperty("token")) {
    config.headers.Authorization = localStorage.getItem("token");
  }
  return config;
});

function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default RootLayout;
