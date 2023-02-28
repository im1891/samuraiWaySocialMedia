import axios, { AxiosResponse } from "axios";
import { UserType } from "../reducers/usersPage-reducer";
import { UserProfileType } from "../reducers/profilePage-reducer";
import { UserDataType } from "../reducers/auth-reducer";

type UsersResponseType = {
  error: null | string;
  items: UserType[];
  totalCount: number;
};

type UserProfileResponseType = UserProfileType;

type AuthUserDataResponseType = {
  data: UserDataType;
  fieldsErrors: string[];
  messages: string[];
  resultCode: number;
};

type FollowUnfollowUserResponseType = {
  resultCode: number;
  messages: string[];
  data: {};
  fieldsErrors: string[];
};

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    ["API-KEY"]: "d41e81cd-2baa-482e-9c85-698794de0f64",
  },
});
export const usersAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 5) => {
    return axiosInstance
      .get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response: AxiosResponse<UsersResponseType>) => response.data);
  },

  getUserProfile: (userId: string) => {
    return axiosInstance
      .get<UserProfileResponseType>(`profile/${userId}`)
      .then(
        (response: AxiosResponse<UserProfileResponseType>) => response.data
      );
  },

  followUser: (userId: number) => {
    return axiosInstance
      .post<FollowUnfollowUserResponseType>(`follow/${userId}`)
      .then((response: AxiosResponse<FollowUnfollowUserResponseType>) => {
        return response.data;
      });
  },

  unfollowUser: (userId: number) => {
    return axiosInstance
      .delete<FollowUnfollowUserResponseType>(`follow/${userId}`)
      .then(
        (response: AxiosResponse<FollowUnfollowUserResponseType>) =>
          response.data
      );
  },
};

export const authAPI = {
  me: () => {
    return axiosInstance
      .get<AuthUserDataResponseType>("auth/me")
      .then(
        (response: AxiosResponse<AuthUserDataResponseType>) => response.data
      );
  },
};
