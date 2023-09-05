import React from 'react'
import style from './MyPosts.module.css'
import { Post } from './Post/Post'
import { MyPostsPropsType } from './MyPostsContainer'
import { AddPostForm } from './AddPostForm'

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
	const { posts, addPost } = props

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
