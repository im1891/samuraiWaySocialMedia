import React from "react";
import {
  addMessage,
  DialogType,
  MessageType,
  updateNewMessageText,
} from "../../reducers/dialogsPage-reducer";

import { AppStateType } from "../../store/redux-store";
import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";

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

type MapStatePropsType = {
  messages: MessageType[];
  dialogs: DialogType[];
  messageText: string;
  isAuth: boolean;
};
type MapDispatchPropsType = {
  updateNewMessageText: (messageText: string) => void;
  addMessage: () => void;
};

export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType;
// в state передаем весь state, а не отдельную ветку
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    messageText: state.dialogsPage.messageText,
    isAuth: state.authData.isAuth,
  };
};

export const DialogsContainer = connect(mapStateToProps, {
  addMessage,
  updateNewMessageText,
})(Dialogs);
