import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  let [data] = useState({
    userName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    repassword: "",
  });
  let [validationErrors, setValidationErrors] = useState(null);
  let [responseErrors, setResponseErrors] = useState(null);
  let navigate = useNavigate();

  let schema = Joi.object({
    userName: Joi.string().alphanum().min(3).max(30).required(),
    dateOfBirth: Joi.string(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    repassword: Joi.ref("password"),
  });

  let getData = (e) => {
    data[e.target.name] = e.target.value;
  };

  let formHandler = (e) => {
    e.preventDefault();
    let { error } = schema.validate(data, { abortEarly: false });
    setValidationErrors(error?.details);
    if (validationErrors) return 0;
    axios
      .post("/api/v1/Register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem(
          data.userName,
          JSON.stringify({ ID: data.userName, friends: [], posts: [] })
        );
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setResponseErrors(err.response.data.errors);
      });
  };
  return (
    <>
      {validationErrors ? (
        validationErrors.map((error, index) => (
          <div className="alert alert-danger" role="alert" key={index}>
            {error.message}
          </div>
        ))
      ) : (
        <></>
      )}
      {responseErrors ? (
        responseErrors.map((error, index) => (
          <div className="alert alert-danger" role="alert" key={index}>
            {error[0]}
          </div>
        ))
      ) : (
        <></>
      )}
      <form className="form" onSubmit={formHandler}>
        <label htmlFor="userName" className="form-label">
          User Name:
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="userName"
          name="userName"
          onChange={getData}
        />
        <label htmlFor="dateOfBirth" className="form-label">
          Date of Birth:
        </label>
        <input
          type="date"
          className="form-control mb-3"
          id="dateOfBirth"
          name="dateOfBirth"
          onChange={getData}
        />
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control mb-3"
          id="email"
          name="email"
          onChange={getData}
        />
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={getData}
        />
        <label htmlFor="repassword" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="repassword"
          name="repassword"
          onChange={getData}
        />
        <p>
          already have account? <Link to="/login">login</Link>
        </p>
        <button typeof="submit" className="btn btn-outline-light">
          Register
        </button>
      </form>
    </>
  );
}
