import { connect } from "react-redux";
import {
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
import axios, { AxiosResponse } from "axios";
import Users from "./Users";
import { Preloader } from "../common/Preloader/Preloader";

type MapStatePropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};

type MapDispatchPropsType = {
  followUser: (payload: { userId: number }) => void;
  unfollowUser: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (newCurrentPage: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};

type UsersContainerPropsType = MapDispatchPropsType & MapStatePropsType;

class UsersContainer extends React.Component<UsersContainerPropsType> {
  constructor(props: UsersContainerPropsType) {
    super(props);
  }

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get<UserType[]>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response: AxiosResponse) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        /* this.props.setTotalUsersCount(response.data.totalCount)*/
      });
  }

  onPageChangedClickHandler = (newCurrentPage: number) => {
    this.props.setCurrentPage(newCurrentPage);
    this.props.toggleIsFetching(true);
    axios
      .get<UserType[]>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`
      )
      .then((response: AxiosResponse) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    if (this.props.isFetching) return <Preloader />;
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChangedClickHandler={this.onPageChangedClickHandler}
        unfollowUser={this.props.unfollowUser}
        followUser={this.props.followUser}
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
})(UsersContainer);
