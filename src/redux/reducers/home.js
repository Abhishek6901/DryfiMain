import {  CURRENT_LAT_LONG, DAILY_REPORT, EARNING, LOADING, } from "../types";

const initialState = {
    earning: null,
    dailyReport: null,
    loading: false,
    currentLatLong: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
       
        case EARNING:
            return {
                ...state,
                earning: action.payload
            }
        case DAILY_REPORT:
            return {
                ...state,
                dailyReport: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
            case CURRENT_LAT_LONG:
                return {
                    ...state,
                    currentLatLong: action.payload
                }
        default:
            return state;
    }
}