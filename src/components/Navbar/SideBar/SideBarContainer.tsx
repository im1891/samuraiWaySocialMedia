import {connect} from "react-redux";
import {SideBar} from "./SideBar";
import {DialogType} from "../../../Redux/dialogsPage-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
   dialogs: DialogType[]
}

export type SideBarPropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType=> {
    return {
        dialogs: state.sideBar.dialogs
    }
}

const mapDispatchToProps =(dispatch: Dispatch)=> {
    return {

    }
}
export const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)