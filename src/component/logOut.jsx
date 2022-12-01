import React, { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setCheckLogin } = useContext(UserContext);
  const handleLogout = () => {
    setCheckLogin(false); 
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="card text-left">
        <div className="card-body">
          <h4 className="card-title">Do you wish to log out from out website ?</h4>
          <p className="card-text mt-5">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => handleLogout()}>
              Logout
            </button>
          </p>
        </div>
      </div>
    </>
  );
};
export default Logout;