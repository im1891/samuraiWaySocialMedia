import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StoreType} from "./Redux/store";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";

type AppPropsType = {
    store: StoreType
}

export const App: React.FC<AppPropsType> = (props) => {

    const {store} = props;

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={store.getState().sideBar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile profilePage={store.getState().profilePage}
                                             updateNewPostText={store.updateNewPostText.bind(store)}
                                             addPost={store.addPost.bind(store)}/>}/>
                    <Route path='/dialogs'
                           element={<Dialogs dialogsPage={store.getState().dialogsPage}
                                             updateNewMessageText={store.updateNewMessageText.bind(store)}
                                             addMessage={store.addMessage.bind(store)}/>}/>
                </Routes>

            </div>

        </div>
    );
}

