import { AppStateType } from 'store/store'

export const selectUserProfile = (state: AppStateType) => state.profilePage.userProfile

export const selectStatus = (state: AppStateType) => state.profilePage.status

export const selectAuthorizedUserId = (state: AppStateType) => state.authData.userData.id

export const selectIsAuth = (state: AppStateType) => state.authData.isAuth

export const selectUserLogin = (state: AppStateType) => state.authData.userData.login

export const selectUsers = (state: AppStateType) => state.usersPage.users

export const selectPageSize = (state: AppStateType) => state.usersPage.pageSize

export const selectTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount

export const selectCurrentPage = (state: AppStateType) => state.usersPage.currentPage

export const selectIsFetching = (state: AppStateType) => state.usersPage.isFetching

export const selectFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress

export const selectPosts = (state: AppStateType) => state.profilePage.posts

export const selectMessages = (state: AppStateType) => state.dialogsPage.messages

export const selectDialogs = (state: AppStateType) => state.dialogsPage.dialogs
