import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { UserProfileType } from "../../reducers/profilePage-reducer";

type ProfilePropsType = {
  userProfile: null | UserProfileType;
  status: string;
  updateStatus: (status: string) => void;
};

export const Profile: React.FC<ProfilePropsType> = (props) => {
  const { userProfile, status, updateStatus } = props;

  return (
    <div>
      <ProfileInfo
        userProfile={userProfile}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
