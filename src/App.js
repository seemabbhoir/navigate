import React, { useState } from "react";
import Navbar from "./component/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
import LoginPage from "./component/loginPage";
import List from "./component/list";
import Logout from "./component/logOut";
import Layout from "./component/layout";
import UserContext from "./context/userContext";
import NotePage from "./component/notes";
import EditPage from "./component/editPage";
import HighOrderCom from "./component/highOrderCom";

const App = () => {
  const [checkLogin, setCheckLogin] = useState(false);
  return (
    <>
      <UserContext.Provider value={{ checkLogin, setCheckLogin }}>
        <Navbar />
        <div className="container pt-5">
          <Layout>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<List />} path="/list" />
              <Route element={<NotePage />} path="/notepage" />
              <Route element={<HighOrderCom />} path="/hoc" />
              <Route element={<LoginPage />} path="/login" />
              <Route element={<Logout />} path="/logOut" /> 
              <Route element={<EditPage />} path="/editNote/:id" />
            </Routes>
          </Layout>
        </div>
      </UserContext.Provider>
    </>
  );
};
export default App;
