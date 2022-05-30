import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import Buttons from "../components/Buttons";
import NavBar from "../layouts/NavBar";

const TravelDetails = () => {
  const navigate = useNavigate();
  // const onlineUser = useSelector((state) => state.usersReducer.onlineUser);

  useEffect(() => {
    document.tile = "Travel Details";
  }, []);

  useEffect(() => {
    if (localStorage.onlineUser) {
      navigate("/travel-details");
    } else {
      navigate("/login");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      date: "",
      terms: false,
      times: "09:15",
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      terms: Yup.boolean().oneOf(
        [true],
        "You must accept our terms and condition of service",
      ),
    }),
    onSubmit: (values) => {
      navigate("/book-transport");
    },
  });
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="container col-6">
            <form onSubmit={formik.handleSubmit}>
              <h2 className="text-center my-3">Travel Details</h2>
              <input
                type="date"
                name="date"
                className={
                  formik.touched.date && formik.errors.date
                    ? "form-control my-2 w-100 is-invalid bg-transparent"
                    : "form-control my-2 w-100 bg-transparent"
                }
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.date ? (
                <div className="text-danger">{formik.errors.date}</div>
              ) : null}
              <input
                type="time"
                name="times"
                className={
                  formik.touched.times && formik.errors.times
                    ? "w-100 my-2 form-control is-invalid bg-transparent"
                    : "form-control my-2 w-100 bg-transparent"
                }
                value={formik.values.times}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.times ? (
                <div className="text-danger">{formik.errors.times}</div>
              ) : null}
              <input
                type="checkbox"
                name="terms"
                value={formik.values.terms}
                onChange={formik.handleChange}
              />
              <span> Agree to our terms and condition of service</span>
              {formik.touched.times ? (
                <div className="text-danger">{formik.errors.terms}</div>
              ) : null}
              <Buttons
                color="primary"
                name="Proceed to Payment"
                types="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
