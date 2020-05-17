import { ADD_SITE_DATA } from "../constants";

export const actionSite = (data) => {
    return {
        type: ADD_SITE_DATA,
        payload: data
    }
}

export function addSite(data) {
    return (dispatch) => {
        return dispatch(actionSite(data));
    }
}