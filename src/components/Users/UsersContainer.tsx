import { connect } from "react-redux";
import {
  toggleFollowingInProgress,
  followUser,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollowUser,
  UserType,
} from "../../reducers/usersPage-reducer";
import { AppStateType } from "../../store/redux-store";
import React from "react";
import Users from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { axiosAPI } from "../../api/api";

type MapStatePropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

type MapDispatchPropsType = {
  followUser: (payload: { userId: number }) => void;
  unfollowUser: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (newCurrentPage: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  toggleFollowingInProgress: (status: boolean, userId: number) => void;
};

type UsersContainerPropsType = MapDispatchPropsType & MapStatePropsType;

class UsersContainer extends React.Component<UsersContainerPropsType> {
  constructor(props: UsersContainerPropsType) {
    super(props);
  }

  componentDidMount() {
    this.props.toggleIsFetching(true);

    axiosAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        /* this.props.setTotalUsersCount(data.totalCount)*/
      });
  }

  onPageChangedClickHandler = (newCurrentPage: number) => {
    this.props.setCurrentPage(newCurrentPage);
    this.props.toggleIsFetching(true);
    axiosAPI.getUsers(newCurrentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    const {
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      unfollowUser,
      followUser,
      followingInProgress,
      toggleFollowingInProgress,
    } = this.props;

    if (this.props.isFetching) return <Preloader />;
    return (
      <Users
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        users={users}
        onPageChangedClickHandler={this.onPageChangedClickHandler}
        unfollowUser={unfollowUser}
        followUser={followUser}
        followingInProgress={followingInProgress}
        toggleFollowingInProgress={toggleFollowingInProgress}
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

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
})(UsersContainer);
