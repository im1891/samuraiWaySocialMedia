import React from 'react'
import style from './MyPosts.module.css'
import { Post } from './Post/Post'
import { MyPostsPropsType } from './MyPostsContainer'
import { AddPostForm } from './AddPostForm'
import { AppStateType } from '../../../store/store'

export class MyPosts extends React.Component<MyPostsPropsType> {
	shouldComponentUpdate = (nextProps: Readonly<MyPostsPropsType>, nextState: Readonly<AppStateType>): boolean => {
		return nextProps !== this.props || this.state !== nextState
	}

	render() {
		const { posts, addPost } = this.props

		let postsElements = posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

		const addNewPost = (postMessage: string) => {
			addPost(postMessage)
		}
		return (
			<div className={style.postsBlock}>
				<h3>My Posts</h3>
				<AddPostForm addNewPost={addNewPost} />
				<div className={style.posts}>{postsElements}</div>
			</div>
		)
	}
}
