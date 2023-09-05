import { MyPosts } from './MyPosts'
import { ComponentType } from 'react'
import { addPost, PostType } from 'reducers/profilePage-reducer'
import { connect } from 'react-redux'
import { AppStateType } from 'store/store'
import { compose } from 'redux'
import { selectPosts } from 'selectors'

/*
export const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
            store => {
                const updateNewPostText = (postText: string) => {
                    store.dispatch(updateNewPostTextActionCreator(postText))
                }

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                return <MyPosts posts={store.getState().profilePage.posts}
                                postMessage={store.getState().profilePage.postMessage}
                                updateNewPostText={updateNewPostText} addPost={addPost}/>
            }
        }
    </StoreContext.Consumer>


}*/

type MapStatePropsType = {
	posts: PostType[]
}

type MapDispatchPropsType = {
	addPost: (postMessage: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		posts: selectPosts(state)
	}
}

export default compose<ComponentType>(connect(mapStateToProps, { addPost }))(MyPosts)
