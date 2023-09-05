import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../assets/photo.png'
import { UserType } from 'reducers/usersPage-reducer'
import { NavLink } from 'react-router-dom'

type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	users: UserType[]
	followingInProgress: number[]
	onPageChangedClickHandler: (newCurrentPage: number) => void
	follow: (payload: { userId: number }) => void
	unfollow: (payload: { userId: number }) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {
	const {
		totalUsersCount,
		pageSize,
		currentPage,
		users,
		followingInProgress,
		onPageChangedClickHandler,
		follow,
		unfollow
	} = props

	let pagesCount = Math.ceil(totalUsersCount / pageSize)

	let pages = []

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div className={style.users}>
			<div className={style.pages}>
				{pages.map((p) => (
					<span
						className={`${style.page} ${currentPage === p && style.selectedPage}`}
						onClick={() => onPageChangedClickHandler(p)}
					>
						{p}
					</span>
				))}
			</div>
			{users.map((u: UserType) => (
				<div key={u.id} className={style.user}>
					<div>
						<div>
							<NavLink to={`/profile/${u.id}`}>
								<img className={style.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" />
							</NavLink>
						</div>
						<div>
							<button
								onClick={
									u.followed
										? () => {
												unfollow({ userId: u.id })
										  }
										: () => {
												follow({ userId: u.id })
										  }
								}
								disabled={followingInProgress.some((id) => id === u.id)}
							>
								{u.followed ? 'Unfollow' : 'Follow'}
							</button>
						</div>
					</div>
					<div className={style.userInfo}>
						<div>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</div>
						<div className={style.location}>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Users
