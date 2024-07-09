import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Post from "../services/Post";

function AddCommentForm({ postId, reftch }) {
  const formik = useFormik({
    initialValues: { body: "" },
    validationSchema: Yup.object().shape({
      body: Yup.string()
        .min(5, "Minimum characters is 5!")
        .max(200, "Maximum characters is 5!")
        .required("Comment is required!"),
    }),
    onSubmit: (data) => {
      Post.addComment({ ...data, postId })
        .then((res) => {
          formik.resetForm();
          reftch();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const showError = (name) =>
    formik.errors[name] && formik.touched[name] ? (
      <span className="text-danger fw-bold">{formik.errors[name]}</span>
    ) : null;

  return (
    <>
      <h4>Comments</h4>
      <div>
        <form>
          <label htmlFor={"message"}>Your comment: {showError("body")}</label>
          <textarea
            name="body"
            placeholder="Add your comment"
            style={{ resize: "none" }}
            id="message"
            className="form-control border border-1 border-dark border-opacity-75 mb-2"
            onInput={formik.handleChange}
            value={formik.values.body}
          ></textarea>
          <button
            onClick={formik.handleSubmit}
            type={"submit"}
            className="btn btn-primary form-control"
          >
            Add Comment
          </button>
        </form>
      </div>
    </>
  );
}

export default AddCommentForm;
