import React, { ComponentType } from "react";
import { Header } from "./Header";
import { getAuthUserData, logout } from "../../reducers/auth-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { compose } from "redux";

type MapStatePropsType = {
  isAuth: boolean;
  userLogin: null | string;
};

type MapDispatchPropsType = {
  getAuthUserData: () => void;
  logout: () => void;
};

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    const { getAuthUserData, ...otherProps } = this.props;
    return (
      <>
        <Header {...otherProps} />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.authData.isAuth,
    userLogin: state.authData.userData.login,
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, { getAuthUserData, logout })
)(HeaderContainer);
