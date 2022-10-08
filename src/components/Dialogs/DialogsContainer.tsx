import React from "react";
import {
    addMessageActionCreator,
    dialogsPageReducerACTypes,
    DialogsPageType,
    updateNewMessageTextActionCreator
} from "../../Redux/dialogsPage-reducer";


import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

/*

export const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {store => {
            const updateNewMessageText = (messageText: string) => {
                store.dispatch(updateNewMessageTextActionCreator(messageText))
            }

            const addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            return <Dialogs dialogs={store.getState().dialogsPage.dialogs}
                            messages={store.getState().dialogsPage.messages}
                            messageText={store.getState().dialogsPage.messageText}
                            updateNewMessageText={updateNewMessageText}
                            addMessage={addMessage}/>
        }
        }
    </StoreContext.Consumer>
}

*/


type MapStatePropsType = DialogsPageType
type MapDispatchPropsType = {
    updateNewMessageText: (messageText: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType
// в state передаем весь state, а не отдельную ветку
const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        messageText: state.dialogsPage.messageText
    }
}


const mapDispatchToProps = (dispatch: Dispatch<dialogsPageReducerACTypes>): MapDispatchPropsType => {

    return {
        updateNewMessageText: (messageText: string) => {
            dispatch(updateNewMessageTextActionCreator(messageText))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)