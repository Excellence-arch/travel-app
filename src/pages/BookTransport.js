import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import NavBar from "../layouts/NavBar";

const BookTransport = () => {
  const navigate = useNavigate();
  const name = useSelector((state) => state.usersReducer.full_name);
  const mail = useSelector((state) => state.usersReducer.email);
  const cost = useSelector((state) => state.citiesReducer.cost);
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const formik = useFormik({
    initialValues: {
      email: mail,
      amount: cost,
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
                  value={formik.values.amount}
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
            </form>
            <PaystackButton
              className="btn btn-success w-100"
              text="Pay"
              amount={formik.values.amount * 100}
              name={formik.values.full_name}
              publicKey={publicKey}
              email={formik.values.email}
              onSuccess={() => {
                alert("Payment successful");
                navigate("/home");
              }}
              onClose={() => alert("This payment will not be made")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTransport;
