import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";

import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {StoreType} from "./Redux/redux-store";


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
                           element={<Profile/>}/>
                    <Route path='/dialogs'
                           element={<DialogsContainer/>}/>
                </Routes>

            </div>

        </div>
    );
}

