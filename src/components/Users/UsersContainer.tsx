import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow,
  UserType,
} from "../../reducers/usersPage-reducer";
import { AppStateType } from "../../store/redux-store";
import React, { ComponentType } from "react";
import Users from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type MapStatePropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

type MapDispatchPropsType = {
  setCurrentPage: (newCurrentPage: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  follow: (payload: { userId: number }) => void;
  unfollow: (userId: number) => void;
};

type UsersContainerPropsType = MapDispatchPropsType & MapStatePropsType;

class UsersContainer extends React.Component<UsersContainerPropsType> {
  /* constructor(props: UsersContainerPropsType) {
                 super(props);
               }*/

  componentDidMount = () => {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChangedClickHandler = (newCurrentPage: number) => {
    // this.props.setCurrentPage(newCurrentPage);
    this.props.getUsers(newCurrentPage, this.props.pageSize);
  };

  render() {
    if (this.props.isFetching) return <Preloader />;
    return (
      <Users
        {...this.props}
        onPageChangedClickHandler={this.onPageChangedClickHandler}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

/*const mapDispatchToProps = (
  dispatch: Dispatch<UsersPageReducerACTypes>
): MapDispatchPropsType => {
  return {
    followUser: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollowUser: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (newCurrentPage: number) => {
      dispatch(setCurrentPageAC(newCurrentPage));
    },
    setTotalUsersCount: (totalUsersCount: number) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};*/

export default compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    follow,
    unfollow,
  })
)(UsersContainer);
