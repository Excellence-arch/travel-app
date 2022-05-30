import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../actions";
import NavBar from "../layouts/NavBar";
import { validPassword, validPhone } from "../validations/regex";

const Register = () => {
  const [allErr, setAllErr] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register";
  }, []);

  const darkMode = useSelector((state) => state.modeReducer.darkMode);
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (!validPhone.test(values.phone)) {
        errors.phone = "Not a valid phone number";
      }
      if (!validPassword.test(values.password)) {
        errors.password = "Please try a stronger password";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password does not match";
      }
      return errors;
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Required"),
      email: Yup.string().email("Email is invalid").required("Required"),
      phone: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setAllErr(false);
      const { full_name, email, phone, password } = values;
      try {
        dispatch(register({ full_name, email, phone, password }));
      } catch (err) {
        setAllErr(err);
      }
      if (allErr === false) {
        navigate("/login");
      }
    },
  });
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 text-center pt-5 container">
            <form
              onSubmit={formik.handleSubmit}
              className="container rounded p-3 shadow-lg"
            >
              {allErr ? (
                <div className="alert alert-danger">{allErr}</div>
              ) : null}
              <input
                type="text"
                placeholder="Full Name"
                style={darkMode ? { color: "white" } : { color: "black" }}
                name="full_name"
                className={
                  formik.touched.full_name && formik.errors.full_name
                    ? "my-2 form-control is-invalid bg-transparent"
                    : "my-2 form-control bg-transparent"
                }
                value={formik.values.full_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.full_name ? (
                <div className="text-danger">{formik.errors.full_name}</div>
              ) : null}

              <input
                type="text"
                name="email"
                style={darkMode ? { color: "white" } : { color: "black" }}
                placeholder="Email"
                className={
                  formik.touched.email && formik.errors.email
                    ? "my-2 form-control is-invalid bg-transparent"
                    : "my-2 form-control bg-transparent"
                }
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}

              <input
                type="text"
                placeholder="phone number"
                name="phone"
                style={darkMode ? { color: "white" } : { color: "black" }}
                className={
                  formik.touched.phone && formik.errors.phone
                    ? "bg-transparent is-invalid form-control my-2"
                    : "my-2 bg-transparent form-control "
                }
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.phone ? (
                <div className="text-danger">{formik.errors.phone}</div>
              ) : null}

              <input
                type={showPwd ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={darkMode ? { color: "white" } : { color: "black" }}
                className={
                  formik.touched.password && formik.errors.password
                    ? "form-control my-2 is-invalid bg-transparent"
                    : "form-control my-2 bg-transparent"
                }
              />

              {formik.touched.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}

              <input
                type={showPwd ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={darkMode ? { color: "white" } : { color: "black" }}
                className={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "form-control my-2 is-invalid bg-transparent"
                    : "form-control my-2 bg-transparent"
                }
              />

              {formik.touched.confirmPassword ? (
                <div className="text-danger">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}

              <input type="checkbox" onChange={() => setShowPwd(!showPwd)} />
              <span>Show Password</span>

              <button
                type="submit"
                className={
                  darkMode
                    ? "btn btn-outline-primary my-3 w-100"
                    : "btn btn-outline-primary my-3 w-100"
                }
              >
                Register
              </button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
