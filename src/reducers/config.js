import { combineReducers } from "redux";
import { baseReducer } from "./base/baseReducer";
export default combineReducers({
    sites: baseReducer
})