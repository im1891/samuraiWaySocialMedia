import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {store, StoreType} from "./Redux/store";
import {App} from "./App";


const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)
