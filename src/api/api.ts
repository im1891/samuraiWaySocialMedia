import axios, { AxiosResponse } from "axios";
import { UserType } from "../reducers/usersPage-reducer";
import { UserProfileType } from "../reducers/profilePage-reducer";
import { UserDataType } from "../reducers/auth-reducer";

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    ["API-KEY"]: "d41e81cd-2baa-482e-9c85-698794de0f64",
  },
});

export const axiosAPI = {
  getUsers: (currentPage: number = 1, pageSize: number = 5) => {
    return axiosInstance
      .get<UserType[]>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response: AxiosResponse) => response.data);
  },

  getUserProfile: (userId: string) => {
    return axiosInstance
      .get<UserProfileType>(`profile/${userId}`)
      .then((response) => response.data);
  },

  getAuthUserData: () => {
    return axiosInstance
      .get<UserDataType>("auth/me")
      .then((response: AxiosResponse) => response.data);
  },

  followUser: (userId: number) => {
    return axiosInstance
      .post(`follow/${userId}`)
      .then((response: AxiosResponse) => response.data);
  },

  unfollowUser: (userId: number) => {
    return axiosInstance
      .delete(`follow/${userId}`)
      .then((response: AxiosResponse) => response.data);
  },
};
