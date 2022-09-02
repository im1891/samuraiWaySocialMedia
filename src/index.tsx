import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {state} from "./Redux/state";
import {App} from "./App";

ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>

    ,
    document.getElementById('root')
);