/*import React from "react";
import style from "./Users.module.css";
import axios, { AxiosResponse } from "axios";
import { UserType } from "../../reducers/usersPage-reducer";
import userPhoto from "../../assets/photo.png";*/

/*
export const UsersOldFC: React.FC<UsersPropsType> = (props) => {
  const { users, setUsers, unfollowUser, followUser } = props;

  const getUsersHandler = () => {
    users.length === 0 &&
      axios
        .get<UserType[]>("https://social-network.samuraijs.com/api/1.0/users")
        .then((response: AxiosResponse) => {
          setUsers(response.data.items);
        });
  };

     [
                    {
                        id: 1,
                        photoURL: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg',
                        followed: true,
                        fullName: 'Dmitry',
                        status: 'Hello world',
                        location: {country: 'Belarus', city: 'Minsk'}
                    },
                        {
                            id: 2,
                            photoURL: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg',
                            followed: false,
                            fullName: 'Pavel',
                            status: 'Wassuuup',
                            location: {country: 'USA', city: 'New-York'}
                        },
                        {
                            id: 3,
                            photoURL: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg',
                            followed: true,
                            fullName: 'Igor',
                            status: 'I\'m developer',
                            location: {country: 'Ukraine', city: 'Zaporizhzhya'}
                        },
                        {
                            id: 4,
                            photoURL: 'https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg',
                            followed: false,
                            fullName: 'Masha',
                            status: 'How you doing?',
                            location: {country: 'Poland', city: 'Warsaw'}
                        }]
  return (
    <div className={style.users}>
      <button onClick={getUsersHandler}>Get users</button>
      {users.map((u: UserType) => (
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
                  u.followed ? () => unfollowUser(u.id) : () => followUser(u.id)
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
};
*/
