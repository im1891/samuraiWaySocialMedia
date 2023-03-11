import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../store/redux-store";
import { Navigate } from "react-router-dom";

type MSTPType = {
  isAuth: boolean;
};

const mstp = (state: AppStateType): MSTPType => ({
  isAuth: state.authData.isAuth,
});

export const withAuthRedirect = <T,>(Component: ComponentType<T>) => {
  const RedirectComponent = (props: MSTPType) => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate replace to={"/login"} />;
    return <Component {...(restProps as T & {})} />;
  };

  return connect(mstp, {})(RedirectComponent);
};
