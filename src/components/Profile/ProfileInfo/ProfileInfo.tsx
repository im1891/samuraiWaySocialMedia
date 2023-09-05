import React from 'react'
import style from './ProfileInfo.module.css'
import { UserProfileType } from 'reducers/profilePage-reducer'
import { Preloader } from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/photo.png'
import { ProfileStatus } from './ProfileStatus'

type ProfileInfoPropsType = {
	userProfile: null | UserProfileType
	status: string
	updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
	const { userProfile, status, updateStatus } = props

	if (!userProfile) return <Preloader />
	return (
		<div>
			{/* <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="banner"
        />
      </div>*/}
			<div className={style.descriptionBlock}>
				<img src={userProfile.photos.small ? userProfile.photos.small : userPhoto} alt="userPhoto" />
				<ProfileStatus status={status} updateStatus={updateStatus} />
				<div>Name: {userProfile.fullName}</div>
				<div>User id: {userProfile.userId}</div>
				<div>About me: {userProfile.aboutMe ? userProfile.aboutMe : `Hello, I'm ${userProfile.fullName}`}</div>
				<h3>Contacts</h3>
				<ul>
					<li>facebook: {userProfile.contacts.facebook ? userProfile.contacts.facebook : 'none'}</li>
					<li>website: {userProfile.contacts.website ? userProfile.contacts.website : 'none'}</li>
					<li>vk: {userProfile.contacts.vk ? userProfile.contacts.vk : 'none'}</li>
					<li>twitter: {userProfile.contacts.twitter ? userProfile.contacts.twitter : 'none'}</li>
					<li>instagram: {userProfile.contacts.instagram ? userProfile.contacts.instagram : 'none'}</li>
					<li>youtube: {userProfile.contacts.youtube ? userProfile.contacts.youtube : 'none'}</li>
					<li>github: {userProfile.contacts.github ? userProfile.contacts.github : 'none'}</li>
					<li>mainLink: {userProfile.contacts.mainLink ? userProfile.contacts.mainLink : 'none'}</li>
				</ul>
				{userProfile.lookingForAJob && (
					<div>
						<h3>Looking for a job</h3>
						<span>{userProfile.lookingForAJobDescription}</span>
					</div>
				)}
			</div>
		</div>
	)
}
