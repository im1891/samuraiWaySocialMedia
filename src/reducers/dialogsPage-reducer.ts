import { v1 } from "uuid";
import { DialogsEvents } from "../events";
import { ProfilePageReducerACTypes } from "./profilePage-reducer";

export type DialogsPageReducerACTypes = ReturnType<typeof addMessage>;

export type MessageType = {
  id: string;
  message: string;
};

export type DialogType = {
  id: string;
  name: string;
  photoURL: string;
};

// первый вариант типизации
/*export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageText: string
}*/

// второй вариант типизации
export type DialogsPageType = typeof initialState;

let initialState = {
  dialogs: [
    {
      id: v1(),
      name: "Dimych",
      photoURL:
        "https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg",
    },
    {
      id: v1(),
      name: "Sasha",
      photoURL:
        "https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg",
    },
    {
      id: v1(),
      name: "Viktor",
      photoURL:
        "https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg",
    },
    {
      id: v1(),
      name: "Sveta",
      photoURL:
        "https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg",
    },
    {
      id: v1(),
      name: "Valera",
      photoURL:
        "https://www.meme-arsenal.com/memes/a857391da22dc0c69390c57198468d8a.jpg",
    },
  ] as DialogType[],
  messages: [
    { id: v1(), message: "Hi" },
    { id: v1(), message: "How are you?" },
    { id: v1(), message: "yo" },
  ] as MessageType[],
};

export const dialogsPageReducer = (
  state: DialogsPageType = initialState,
  action: DialogsPageReducerACTypes | ProfilePageReducerACTypes
): DialogsPageType => {
  switch (action.type) {
    case DialogsEvents.ADD_MESSAGE:
      let newMessage: MessageType = { id: v1(), message: action.messageText };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const addMessage = (messageText: string) =>
  ({
    type: DialogsEvents.ADD_MESSAGE,
    messageText,
  } as const);
