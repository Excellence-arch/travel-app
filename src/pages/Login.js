import { useFormik } from "formik";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../actions";
import NavBar from "../layouts/NavBar";

const Login = () => {
  const [allErr, setAllErr] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const darkMode = useSelector((state) => state.modeReducer.darkMode);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Not an Email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setAllErr(false);
      try {
        dispatch(login(values));
      } catch (err) {
        setAllErr(err);
      }
    },
  });
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-6 text-center container rounded shadow-lg">
            <form onSubmit={formik.handleSubmit} className="p-3">
              {formik.errors.email && formik.errors.password ? (
                <div className="alert alert-danger">{allErr}</div>
              ) : null}
              <input
                type="text"
                placeholder="email"
                name="email"
                style={darkMode ? { color: "white" } : { color: "black" }}
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
                type={showPwd ? "text" : "password"}
                placeholder="password"
                name="password"
                style={darkMode ? { color: "white" } : { color: "black" }}
                className={
                  formik.touched.password && formik.errors.password
                    ? "my-2 form-control is-invalid bg-transparent"
                    : "my-2 form-control bg-transparent"
                }
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <input type="checkbox" onChange={() => setShowPwd(!showPwd)} />
              <span>Show Password</span>

              <button className="btn btn-info w-100" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
