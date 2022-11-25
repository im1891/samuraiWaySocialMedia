import React from "react";
import style from "./Preloader.module.css";
import preloader from "../../../assets/Spin-1s-200px.svg";

export const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};
