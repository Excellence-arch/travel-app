import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Buttons from "../components/Buttons";
import NavBar from "../layouts/NavBar";

const TravelDetails = () => {
  const navigate = useNavigate();
  // const [terms, setTerms] = useState(false);
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
      <div className="container">
        <div className="row">
          <div className="container col-6">
            <form onSubmit={formik.handleSubmit}>
              <input
                type="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                type="time"
                name="times"
                value={formik.values.times}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                type="checkbox"
                name="terms"
                value={formik.values.terms}
                onChange={formik.handleChange}
              />{" "}
              <span>Agree to our terms and condition of service</span>
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
