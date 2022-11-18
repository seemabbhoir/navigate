import React, { useContext,useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext";

const LoginPage = () => {
  //   const [userData, setUserData] = useState({
  //     email: "",
  //     password: "",
  //   });

  const navigate = useNavigate();
  const { setCheckLogin } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the details");
      return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setCheckLogin(true);
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" for="form2Example1">
            Email address
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" for="form2Example2">
            Password
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block d-flex justify-content-center mb-4"
        >
          Sign in
        </button>
      </form>
    </>
  );
};
export default LoginPage;
