import React, { ComponentType } from 'react'
import { Header } from './Header'
import { logout } from 'reducers/auth-reducer'
import { connect } from 'react-redux'
import { AppStateType } from 'store/store'
import { compose } from 'redux'
import { selectIsAuth, selectUserLogin } from 'selectors'

type MapStatePropsType = {
	isAuth: boolean
	userLogin: null | string
}

type MapDispatchPropsType = {
	logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
	render() {
		return (
			<>
				<Header {...this.props} />
			</>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		isAuth: selectIsAuth(state),
		userLogin: selectUserLogin(state)
	}
}

export default compose<ComponentType>(connect(mapStateToProps, { logout }))(HeaderContainer)
