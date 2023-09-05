import React, { ComponentType } from 'react'
import { LoginForm } from './LoginForm'
import { connect } from 'react-redux'
import { login } from 'reducers/auth-reducer'
import { AppStateType } from 'store/store'
import { Navigate } from 'react-router-dom'
import { compose } from 'redux'

type MDTPType = {
	login: (email: string, password: string, rememberMe: boolean) => Promise<string | undefined>
}

type MSTPType = {
	isAuth: boolean
}

type LoginPropsType = MDTPType & MSTPType
const Login: React.FC<LoginPropsType> = ({ isAuth, login }) => {
	if (isAuth) return <Navigate replace to={'/profile'} />
	return (
		<div>
			<h1>Login</h1>
			<LoginForm login={login} />
		</div>
	)
}

const mapStateToProps = (state: AppStateType): MSTPType => ({
	isAuth: state.authData.isAuth
})
export default compose<ComponentType>(connect(mapStateToProps, { login }))(Login)
