import React from "react";
import { UsersPropsType } from "./UsersContainer";
import style from "./Users.module.css";
import axios, { AxiosResponse } from "axios";
import { UserType } from "../../Redux/UsersPage-reducer";
import userPhoto from "../../assets/photo.png";

export class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get<UserType[]>("https://social-network.samuraijs.com/api/1.0/users")
      .then((response: AxiosResponse) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={style.users}>
        {this.props.users.map((u) => (
          <div key={u.id} className={style.user}>
            <div>
              <div>
                <img
                  className={style.userPhoto}
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  alt=""
                />
              </div>
              <div>
                <button
                  onClick={
                    u.followed
                      ? () => this.props.unfollowUser(u.id)
                      : () => this.props.followUser(u.id)
                  }
                >
                  {u.followed ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
            <div className={style.userInfo}>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div className={style.location}>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
