import React from "react";
import { Profile } from "./Profile";
import axios, { AxiosResponse } from "axios";
import { connect } from "react-redux";
import {
  setUserProfile,
  UserProfileType,
} from "../../reducers/profilePage-reducer";
import { AppStateType } from "../../store/redux-store";
import { withRouter, WithRouterProps } from "../common/withRouter/withRouter";

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
    axios
      .get<UserProfileType>(
        `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
      )
      .then((response: AxiosResponse<UserProfileType>) =>
        this.props.setUserProfile(response.data)
      );
  }

  render() {
    return (
      <div>
        <Profile userProfile={this.props.userProfile} />
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
