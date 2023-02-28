import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  UserProfileType,
} from "../../reducers/profilePage-reducer";
import { AppStateType } from "../../store/redux-store";
import { withRouter, WithRouterProps } from "../common/withRouter/withRouter";
import { Navigate } from "react-router-dom";

type MapStatePropsType = {
  userProfile: null | UserProfileType;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void;
};

type ProfileContainerPropsType = MapStatePropsType &
  MapDispatchPropsType &
  WithRouterProps;

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.params.userId;
    !userId && (userId = "20906");
    this.props.getUserProfile(userId);
  }

  render() {
    const { userProfile, isAuth } = this.props;

    if (!isAuth) return <Navigate replace to={"/login"} />;
    return (
      <div>
        <Profile userProfile={userProfile} />
      </div>
    );
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.authData.isAuth,
  };
};

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
