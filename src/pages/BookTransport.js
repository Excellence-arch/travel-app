import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import Buttons from "../components/Buttons";
import NavBar from "../layouts/NavBar";

const BookTransport = () => {
  const name = useSelector((state) => state.usersReducer.full_name);
  const mail = useSelector((state) => state.usersReducer.email);
  const formik = useFormik({
    initialValues: {
      email: mail,
      amount: "",
      full_name: name,
    },
  });
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-6 container">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  disabled
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  name="amount"
                  disabled
                  onChange={formik.handleChange}
                  value=""
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  disabled
                  onChange={formik.handleChange}
                  value={formik.values.full_name}
                />
              </div>
              <div className="form-submit">
                <Buttons name="Pay" types="submit" color="success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTransport;
