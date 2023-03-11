import axios, { AxiosResponse } from "axios";
import { UserType } from "../reducers/usersPage-reducer";
import { UserDataType } from "../reducers/auth-reducer";
import { UserProfileType } from "../reducers/profilePage-reducer";
import { FormInputType } from "../components/Login/LoginForm";

type GetUsersResponseType = {
  error: null | string;
  items: UserType[];
  totalCount: number;
};

type GetUserProfileResponseType = UserProfileType;

type ResponseType<T> = {
  fieldsErrors: string[];
  messages: string[];
  resultCode: number;
  data: T;
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
      .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response: AxiosResponse<GetUsersResponseType>) => response.data);
  },

  followUser: (userId: number) => {
    return axiosInstance
      .post<ResponseType<{}>>(`follow/${userId}`)
      .then((response: AxiosResponse<ResponseType<{}>>) => {
        return response.data;
      });
  },

  unfollowUser: (userId: number) => {
    return axiosInstance
      .delete<ResponseType<{}>>(`follow/${userId}`)
      .then((response: AxiosResponse<ResponseType<{}>>) => response.data);
  },

  getUserProfile: (userId: string) => {
    console.warn("Obsolete method. Use profileAPI");
    return profileAPI.getUserProfile(userId);
  },
};

export const profileAPI = {
  getUserProfile: (userId: string) => {
    return axiosInstance
      .get<GetUserProfileResponseType>(`profile/${userId}`)
      .then(
        (response: AxiosResponse<GetUserProfileResponseType>) => response.data
      );
  },
  getStatus: (userId: number) => {
    return axiosInstance
      .get<string>(`profile/status/${userId}`)
      .then((res: AxiosResponse<string>) => res.data);
  },

  updateStatus: (status: string) => {
    return axiosInstance
      .put<ResponseType<{}>>("profile/status", { status })
      .then((res: AxiosResponse<ResponseType<{}>>) => res.data);
  },
};

export const authAPI = {
  me: () => {
    return axiosInstance
      .get<ResponseType<UserDataType>>("auth/me")
      .then(
        (response: AxiosResponse<ResponseType<UserDataType>>) => response.data
      );
  },

  login: (data: FormInputType) => {
    return axiosInstance
      .post("auth/login", {
        email: data.login,
        password: data.password,
        rememberMe: data.rememberMe,
      })
      .then((res: AxiosResponse<ResponseType<{ userId: number }>>) => {
        return res.data;
      });
  },
};
