import * as React from "react";
import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

//dest
//react hooks
//use adv packges,


const Login: React.FunctionComponent<{}> = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      country: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invaild email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(/[A-Z]/, "Must contain one Uppercase")
        .matches(/([a-z])/, "Must contain one Lowercase")
        .matches(/(\d)/, "Must contain one Special character")
        .matches(/(\W)/, "Must contain one Number")
        .min(8, "Must be 8 characters"),
      country: Yup.string().required("Please select your country"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("submitted successfully");
    },
  });

  return (
    <div className="box">
      <form className="form" onSubmit={formik.handleSubmit}>
        <p>Create Account</p>

        <div className="emailbox">
          <label htmlFor="email" className="label">
            Email:
          </label>{" "}
          
          <input
            type="email"
            id="email"
            className="input"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="required">{formik.errors.email}</div>
        </div>

        <div className="item">
          <label htmlFor="password" className="label">
            Password:
          </label>

          <input
            type="password"
            id="password"
            className="input"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div className="required">{formik.errors.password}</div>
        </div>

        <div className="item">
          <label htmlFor="country" className="label">
            Country:
          </label>{" "}

          <select
            id="country"
            className="select"
            onChange={formik.handleChange}
            value={formik.values.country}
          >
            <option value="">select</option>
            <option value="india">India</option>
            <option value="dubai">Dubai</option>
            <option value="china">China</option>
          </select>
          <div className="required">{formik.errors.country}</div>
        </div>

        <div className="item">
          <input type="checkbox" id="check" required />
          <label htmlFor="check" id="checkdata">
            I accept the terms and conditions
          </label>
        </div>
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default Login;
