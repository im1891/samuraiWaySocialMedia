import React, { ComponentType } from "react";
import { Profile } from "./Profile";
import {
  getStatus,
  getUserProfile,
  updateStatus,
  UserProfileType,
} from "../../reducers/profilePage-reducer";
import { AppStateType } from "../../store/redux-store";
import { withRouter, WithRouterProps } from "../common/withRouter/withRouter";
import { compose } from "redux";
import { connect } from "react-redux";

type MapStatePropsType = {
  userProfile: null | UserProfileType;
  status: string;
  authorizedUserId: null | number;
};

type MapDispatchPropsType = {
  getUserProfile: (userId: number | null) => void;
  getStatus: (userId: number | null) => void;
  updateStatus: (status: string) => void;
};

type ProfileContainerPropsType = MapStatePropsType &
  MapDispatchPropsType &
  WithRouterProps;

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId;
    userId = +this.props.params?.userId;
    !userId && (userId = this.props.authorizedUserId);
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    const { userProfile, status } = this.props;

    return (
      <div>
        <Profile
          userProfile={userProfile}
          status={status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.authData.userData.id,
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter
)(ProfileContainer);
