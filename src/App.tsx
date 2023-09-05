import React, { ComponentType } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from 'components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Login from './components/Login/Login'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { initializeApp } from 'reducers/appReducer'
import { AppStateType } from 'store/store'
import { Preloader } from 'components/common/Preloader/Preloader'

type MDPT = {
	initializeApp: () => void
}

type MSPT = {
	isInitialized: boolean
}
type AppPropsType = MDPT & MSPT

class App extends React.Component<AppPropsType> {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.isInitialized) {
			return <Preloader />
		}
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/*" element={<ProfileContainer />} />
						<Route path="/profile/:userId" element={<ProfileContainer />} />
						<Route path="/dialogs" element={<DialogsContainer />} />
						<Route path="/users" element={<UsersContainer />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: AppStateType): MSPT => {
	return {
		isInitialized: state.app.isInitialized
	}
}
export default compose<ComponentType>(connect(mapStateToProps, { initializeApp }))(App)
