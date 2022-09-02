import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType} from "./Redux/state";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";

type AppPropsType = {
    state: StateType
}

export const App: React.FC<AppPropsType> = (props) => {

    const {state} = props;

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.sideBar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile state={state}/>}/>
                    <Route path='/dialogs' element={<Dialogs state={state.dialogsPage}/>}/>
                </Routes>

            </div>

        </div>
    );
}

