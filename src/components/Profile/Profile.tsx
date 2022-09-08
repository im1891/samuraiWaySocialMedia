import React from "react";
import {ProfilePageType} from "../../Redux/state";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    state: ProfilePageType
    changeNewPostText: (postText: string) => void
    addPost: () => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {state, changeNewPostText, addPost} = props;

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={state} changeNewPostText={changeNewPostText} addPost={addPost}/>
        </div>
    )
}
