import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

import {Provider} from "./StoreContext";
import {store, StoreType} from "./Redux/redux-store";


const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store)
store.subscribe(() => rerenderEntireTree(store))
