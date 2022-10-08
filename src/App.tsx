import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

export const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={<Profile/>}/>
                    <Route path='/profile'
                           element={<Profile/>}/>
                    <Route path='/dialogs'
                           element={<DialogsContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>

            </div>

        </div>
    );
}

