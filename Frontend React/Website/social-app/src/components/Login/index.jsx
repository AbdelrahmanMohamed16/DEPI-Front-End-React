import axios from "axios";
import Joi from "joi";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setLoginStatus, setUser }) {
  let [data] = useState({ email: "", password: "" });
  let [validationErrors, setValidationErrors] = useState(null);
  let [responseErrors, setResponseErrors] = useState(null);
  let navigate = useNavigate();

  let schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
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
      .post("/api/v1/Login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setLoginStatus(true);
        localStorage.setItem("token", res.data.jwt);
        !localStorage.getItem(
          jwtDecode(res.data.jwt)[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
          ]
        ) &&
          localStorage.setItem(
            jwtDecode(res.data.jwt)[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
            ],
            JSON.stringify({
              ID: jwtDecode(res.data.jwt)[
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
              ],
              friends: [],
              posts: [],
            })
          );
        setUser(
          JSON.parse(
            localStorage.getItem(
              jwtDecode(res.data.jwt)[
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
              ]
            )
          )
        );
        navigate("/home");
      })
      .catch((err) => (console.log(err), setResponseErrors(err.response.data)));
  };
  return (
    <>
      {validationErrors ? (
        validationErrors.map((error, index) => (
          <div className="alert alert-danger" role="alert" key={index}>
            {error.message}
            {console.log(error.message)}
          </div>
        ))
      ) : (
        <></>
      )}
      {responseErrors ? (
        <div className="alert alert-danger" role="alert">
          {responseErrors}
        </div>
      ) : (
        <></>
      )}
      <form className="form" onSubmit={formHandler}>
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
        <div className="d-flex w-100 justify-content-between my-1">
          <p>
            forgot password? <Link to="/login">restore password</Link>
          </p>
          <p>
            don't have account? <Link to="/register">create account</Link>
          </p>
        </div>
        <button typeof="submit" className="btn btn-outline-light">
          Login
        </button>
      </form>
    </>
  );
}
