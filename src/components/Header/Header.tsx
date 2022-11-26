import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  isAuth: boolean;
  userLogin: null | string;
};
export const Header: React.FC<HeaderPropsType> = ({ isAuth, userLogin }) => {
  return (
    <header className={style.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
      <div className={style.loginBlock}>
        {isAuth ? `User: ${userLogin}` : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};
