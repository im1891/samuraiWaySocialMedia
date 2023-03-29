import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  isAuth: boolean;
  userLogin: null | string;
  logout: () => void;
};
export const Header: React.FC<HeaderPropsType> = ({
  isAuth,
  userLogin,
  logout,
}) => {
  return (
    <header className={style.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
      <div className={style.loginBlock}>
        {isAuth ? (
          <div>
            <span>{`User: ${userLogin}`}</span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
