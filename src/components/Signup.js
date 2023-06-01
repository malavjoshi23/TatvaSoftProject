import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "./auth-context";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Signup = () => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        // Update the authentication state
        auth.login();
        navigate("/");
      },
    });
  console.log(errors);

  return (
    <div>
      <h2 align="center">Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            UserName
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p style={{ color: "red" }}>{errors.name}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p style={{ color: "red" }}>{errors.email}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="confirm_password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            className="form-control"
            id="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p style={{ color: "red" }}>{errors.confirm_password}</p>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
