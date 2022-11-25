import { ProfilePageReducerACTypes } from "./profilePage-reducer";
import { dialogsPageReducerACTypes, DialogType } from "./dialogsPage-reducer";
import { v1 } from "uuid";

export type SideBarType = {
  dialogs: DialogType[];
};

let initialState: SideBarType = {
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
  ],
};
export const sideBarReducer = (
  state: SideBarType = initialState,
  action: ProfilePageReducerACTypes | dialogsPageReducerACTypes
): SideBarType => {
  return state;
};
