import React from "react";
import { LoginForm } from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../reducers/auth-reducer";
import { AppStateType } from "../../store/redux-store";
import { Navigate } from "react-router-dom";

type MDTPType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
};

type MSTPType = {
  isAuth: boolean;
};

type LoginPropsType = MDTPType & MSTPType;
const Login: React.FC<LoginPropsType> = ({ login, isAuth }) => {
  if (isAuth) return <Navigate replace to={"/profile"} />;
  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={login} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.authData.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
