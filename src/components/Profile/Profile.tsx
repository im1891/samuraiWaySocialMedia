import React from "react";
import {ProfilePageType} from "../../Redux/store";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsActionCreatorsTypes} from "../../Redux/profilePage-reducer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: PostsActionCreatorsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {profilePage, dispatch} = props;

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={profilePage} dispatch={dispatch}/>
        </div>
    )
}
