import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    setUsersAC,
    unfollowAC,
    UsersPageReducerACTypes,
    UsersPageType,
    UserType
} from "../../Redux/UsersPage-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = UsersPageType

type MapDispatchPropsType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersPageReducerACTypes>): MapDispatchPropsType => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)