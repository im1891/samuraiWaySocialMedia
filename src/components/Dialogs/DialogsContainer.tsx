import React, { ComponentType } from "react";
import {
  addMessage,
  DialogType,
  MessageType,
} from "../../reducers/dialogsPage-reducer";
import { AppStateType } from "../../store/redux-store";
import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
};

type MapDispatchPropsType = {
  addMessage: (messageText: string) => void;
};

export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, { addMessage }),
  withAuthRedirect
)(Dialogs);
