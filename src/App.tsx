import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/*" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};
