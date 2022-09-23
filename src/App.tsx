import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StoreType} from "./Redux/store";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {PostsActionCreatorsTypes} from "./Redux/profilePage-reducer";
import {MessagesActionCreatorsTypes} from "./Redux/dialogsPage-reducer";

type AppPropsType = {
    store: StoreType
    dispatch: (action: PostsActionCreatorsTypes | MessagesActionCreatorsTypes) => void
}

export const App: React.FC<AppPropsType> = (props) => {

    const {store, dispatch} = props;

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={store.getState().sideBar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile profilePage={store.getState().profilePage} dispatch={dispatch}/>}/>
                    <Route path='/dialogs'
                           element={<Dialogs dialogsPage={store.getState().dialogsPage} dispatch={dispatch}/>}/>
                </Routes>

            </div>

        </div>
    );
}

