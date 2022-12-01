import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { getLocalStorage } from "../commonFunctions/getLocalStorage";

const Navbar = () => {
  const [check, setCheck] = useState(false);
  const context = useContext(UserContext);
  const {user} = useSelector((state)=>state.userData);
  const checkLogin = () => {
    // const userData = getLocalStorage();
    // if (!userData.email || !userData.password) {
    //   setCheck(false);
    // } else {
    //   setCheck(true);
    // }
    // console.log("constext", context);
    if(!context.checkLogin) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  useEffect(() => {
  checkLogin();
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/notepage">
                  NotePage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hoc">
                  HOC
                </Link>
              </li>
              {check ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <div className="text-light">{user && user?.userEmail}</div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
