import React, {createContext} from "react";
import {StoreType} from "./Redux/redux-store";

export const StoreContext = createContext({} as StoreType)

type ProviderPropsType = {
    store: StoreType,
    children: React.ReactNode
}

export const Provider: React.FC<ProviderPropsType> = (props) => {
    const {store, children} = props;

    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
}