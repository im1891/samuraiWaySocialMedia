import React from "react";
import { Header } from "./Header";
import { setAuthUserData, UserDataType } from "../../reducers/auth-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { axiosAPI } from "../../api/api";

type MapStatePropsType = {
  isAuth: boolean;
  userLogin: null | string;
};

type MapDispatchPropsType = {
  setAuthUserData: (userData: UserDataType) => void;
};

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    axiosAPI.getAuthUserData().then((response) => {
      response.resultCode === 0 && this.props.setAuthUserData(response.data);
    });
  }

  render() {
    return (
      <>
        <Header {...this.props} />
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
