import React from "react";
import { Header } from "./Header";
import { getAuthUserData } from "../../reducers/auth-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../store/redux-store";

type MapStatePropsType = {
  isAuth: boolean;
  userLogin: null | string;
};

type MapDispatchPropsType = {
  getAuthUserData: () => void;
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

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
