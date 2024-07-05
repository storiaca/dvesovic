import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Auth from "../services/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { routes } from "../router/routes";

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function RegisterForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmPassword: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required("First name is required")
        .min(3, "Minimum character is 3."),
      lastName: Yup.string()
        .required("Last name is required")
        .min(3, "Minimum character is 3."),
      email: Yup.string()
        .matches(regexEmail, { message: "Email is invalid" })
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(3, "Minimum character is 3."),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .min(3, "Minimum character is 3."),
    }),
    onSubmit: (values) => {
      console.log(values);
      Auth.register(values)
        .then((res) => {
          formik.resetForm();
          if (res.status === 200) {
            toast("Uspesno ste se registrovali", {
              type: "success",
              toastId: 1,
            });
            navigate(routes.LOGIN.path);
          } else {
            toast(res.data.msg, {
              type: "success",
              toastId: 1,
            });
          }
        })
        .catch((error) => {
          toast(error.message, { type: "error", toastId: 2 });
          console.log(error);
        });
    },
  });
  const showError = (name) =>
    formik.errors[name] && formik.touched[name] ? (
      <span className="text-danger fw-bold">{formik.errors[name]}</span>
    ) : null;

  return (
    <form className="box">
      <label>First name {showError("firstName")}</label>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        className="form-control mb-3"
        onInput={formik.handleChange}
        value={formik.values.firstName}
      />
      <label>Last name {showError("lastName")}</label>
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        className="form-control mb-3"
        onInput={formik.handleChange}
        value={formik.values.lastName}
      />
      <label>Email {showError("email")}</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control"
        onInput={formik.handleChange}
        value={formik.values.email}
      />
      <label>Password {showError("password")}</label>
      <input
        type="password"
        className="form-control mt-3"
        name="password"
        placeholder="Password"
        onInput={formik.handleChange}
        value={formik.values.password}
      />
      <label>Confirm password {showError("confirmPassword")}</label>
      <input
        type="password"
        className="form-control mt-3"
        name="confirmPassword"
        placeholder="Repeat password"
        onInput={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      <button
        className="btn btn-primary mt-3"
        type="submit"
        onClick={formik.handleSubmit}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
