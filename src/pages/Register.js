import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import NavBar from "../layouts/NavBar";

const Register = () => {
  const darkMode = useSelector((state) => state.modeReducer.darkMode);
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Required"),
      email: Yup.string().email("Email is invalid").required("Required"),
      phone: Yup.string().required("Required"),
    }),
  });
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 text-center container">
            <form
              onSubmit={formik.handleSubmit}
              className="container rounded p-3 shadow-lg"
            >
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
              <input type="text" placeholder="password" />
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
