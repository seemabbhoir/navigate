import React, { useContext, useEffect } from "react";
import { getLocalStorage } from "../commonFunctions/getLocalStorage";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext";
import { useDispatch } from "react-redux";
import { setNotes } from "../slice/noteSlice";
import { database, googleProvider } from "../helper";
import firebase from "firebase/app";
import "firebase/auth";
import { setUserData } from "../slice/userSlice";

const Layout = ({ children }) => {
  const context = useContext(UserContext);
  const dispatch = useDispatch();
  const userData = getLocalStorage();
  const navigate = useNavigate();
  const fetchData = () => {
    database.on("value", (snapshot) => {
      let data = snapshot.val();
      dispatch(setNotes(data));
    });
  };

  const fetchUserData = () => {
    firebase.auth().onAuthStateChanged((user) => {
      localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.displayName);
      dispatch(
        setUserData({ userEmail: user.email, accessToken: user.refreshToken })
      );
      context.setCheckLogin(true);
      navigate("/");
    });
  };
  useEffect(() => {
    if (!context.checkLogin) {
      if (!userData.email || !userData.password) {
        navigate("/login");
        localStorage.clear();
      } else {
        context.setCheckLogin(true);
      }
      fetchData();
      fetchUserData();
    }
  }, []);

  return <> {children} </>;
};

export default Layout;
