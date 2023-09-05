import React, { ComponentType } from 'react'
import { Profile } from './Profile'
import { getStatus, getUserProfile, updateStatus, UserProfileType } from 'reducers/profilePage-reducer'
import { AppStateType } from 'store/store'
import { withRouter, WithRouterProps } from '../common/withRouter/withRouter'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { selectAuthorizedUserId, selectStatus, selectUserProfile } from 'selectors'

type MapStatePropsType = {
	userProfile: null | UserProfileType
	status: string
	authorizedUserId: null | number
}

type MapDispatchPropsType = {
	getUserProfile: (userId: number | null) => void
	getStatus: (userId: number | null) => void
	updateStatus: (status: string) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & WithRouterProps

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
	componentDidMount() {
		let userId
		userId = +this.props.params?.userId
		!userId && (userId = this.props.authorizedUserId)
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		const { userProfile, status } = this.props

		return (
			<div>
				<Profile userProfile={userProfile} status={status} updateStatus={this.props.updateStatus} />
			</div>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		userProfile: selectUserProfile(state),
		status: selectStatus(state),
		authorizedUserId: selectAuthorizedUserId(state)
	}
}

export default compose<ComponentType>(
	connect(mapStateToProps, {
		getUserProfile,
		getStatus,
		updateStatus
	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
