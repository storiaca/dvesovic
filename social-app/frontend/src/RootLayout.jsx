import { Outlet, redirect } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreUser } from "./redux/userSlice";

axios.defaults.baseURL = "http://localhost:4000/api";
axios.interceptors.request.use((config) => {
  if (localStorage.hasOwnProperty("token")) {
    config.headers.Authorization = localStorage.getItem("token");
  }
  return config;
});

axios.interceptors.response.use(
  (value) => {
    // console.log(value);
    return value;
  },
  (error) => {
    // console.log("RESPONSE INTERCEPTOR ERROR", error.response.status);
    let status = error.response.status;
    if (status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }
);

function RootLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restoreUser());
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default RootLayout;
