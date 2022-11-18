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
      <div class="card text-left">
        <div class="card-body">
          <h4 class="card-title">Do you wish to log out from out website ?</h4>
          <p class="card-text mt-5">
            <button
              type="button"
              class="btn btn-outline-primary"
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