import React from "react";
import {ProfilePageType} from "../../Redux/store";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profilePage: ProfilePageType
    updateNewPostText: (postText: string) => void
    addPost: () => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {profilePage, updateNewPostText, addPost} = props;

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={profilePage} updateNewPostText={updateNewPostText} addPost={addPost}/>
        </div>
    )
}
