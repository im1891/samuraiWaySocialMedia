import React from "react";
import {StateType} from "../../Redux/state";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    state: StateType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {state} = props;

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={state.profilePage}/>
        </div>
    )
}
