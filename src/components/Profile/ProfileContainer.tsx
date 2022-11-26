import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  setUserProfile,
  UserProfileType,
} from "../../reducers/profilePage-reducer";
import { AppStateType } from "../../store/redux-store";
import { withRouter, WithRouterProps } from "../common/withRouter/withRouter";
import { axiosAPI } from "../../api/api";

type MapStatePropsType = {
  userProfile: null | UserProfileType;
};

type MapDispatchPropsType = {
  setUserProfile: (userProfile: UserProfileType) => void;
};

type ProfileContainerPropsType = MapStatePropsType &
  MapDispatchPropsType &
  WithRouterProps;

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.params.userId;
    !userId && (userId = "2");

    axiosAPI.getUserProfile(userId).then((userProfile: UserProfileType) => {
      this.props.setUserProfile(userProfile);
    });
  }

  render() {
    const { userProfile } = this.props;
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
  };
};

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
