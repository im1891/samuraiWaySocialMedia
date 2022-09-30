import {Dialogs} from "./Dialogs";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsPage-reducer";
import {StoreContext} from "../../StoreContext";


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