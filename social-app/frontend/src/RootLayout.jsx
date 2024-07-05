import { Outlet } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

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
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default RootLayout;
