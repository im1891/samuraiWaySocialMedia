import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, changeNewMessageText, changeNewPostText, StateType} from "./Redux/state";
import {App} from "./App";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 changeNewPostText={changeNewPostText}
                 addPost={addPost}
                 changeNewMessageText={changeNewMessageText}
                 addMessage={addMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

