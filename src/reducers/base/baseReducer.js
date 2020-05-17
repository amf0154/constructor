import { ADD_SITE_DATA } from "../../constants";

const defaultState  = [] //localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : [];
export const baseReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_SITE_DATA:
            return action.payload        
            default: 
            return state;    
    }
}