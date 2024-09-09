import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  let [userData, setUserData] = useState(null);
  let [loginStatus, setLoginStatus] = useState(false);
  let [user, setUser] = useState({ ID: "", friends: [], posts: [] });

  /*
    user id is user name got from userData =>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name
    user has friends(users ids(names)), posts{kind:"video,normalpost",src:"",text:"",userid:""} 
  */

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserData(jwtDecode(localStorage.getItem("token")));
      setLoginStatus(true);
      console.log("before setUser in userEffect");
      setUser(
        JSON.parse(
          localStorage.getItem(
            jwtDecode(localStorage.getItem("token"))[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
            ]
          )
        )
      );
      console.log("after setUser in userEffect");
    }
  }, []);

  function ProtectedRoute(props) {
    if (localStorage.getItem("token") == null) {
      return <Navigate to={"/login"} />;
    } else {
      return props.children;
    }
  }

  function signOut() {
    setLoginStatus(false);
    localStorage.removeItem("token");
  }

  return (
    <>
      <Navbar loginStatus={loginStatus} />
      <div className="d-flex">
        {loginStatus ? <Sidebar user={user} signOut={signOut} /> : <></>}
        <div className="container mt-4">
          <div className="row my-5 justify-content-center">
            <Routes>
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <Home user={user} setUser={setUser} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="home"
                element={
                  <ProtectedRoute>
                    <Home user={user} setUser={setUser} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="login"
                element={
                  !loginStatus ? (
                    <Login setLoginStatus={setLoginStatus} setUser={setUser} />
                  ) : (
                    <Navigate to={"/home"} />
                  )
                }
              />
              <Route
                path="register"
                element={
                  !loginStatus ? <Register /> : <Navigate to={"/home"} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
