import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { SideBarContainer } from './SideBar/SideBarContainer'

export const Navbar = () => {
	return (
		<nav className={style.nav}>
			<div className={style.item}>
				<NavLink to="/profile" className={({ isActive }) => (isActive ? `${style.active}` : '')}>
					{' '}
					Profile
				</NavLink>
			</div>

			<div className={style.item}>
				<NavLink to="/dialogs" className={({ isActive }) => (isActive ? `${style.active}` : '')}>
					Messages
				</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to="/users" className={({ isActive }) => (isActive ? style.active : '')}>
					Users
				</NavLink>
			</div>
			<div className={style.item}>
				<a>News</a>
			</div>
			<div className={style.item}>
				<a>Music</a>
			</div>

			<div>
				<SideBarContainer />
			</div>
		</nav>
	)
}
