import {  LOADING, ASSIGN_ORDER, COMPLETED_ORDER, ORDER_STATUS_LIST, } from "../types";

const initialState = {
    loading: false,
    assignOrder: null,
    completedOrder: null,
    orderStatusList: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ASSIGN_ORDER:
            return {
                ...state,
                assignOrder: action.payload
            }
        case COMPLETED_ORDER:
            return {
                ...state,
                completedOrder: action.payload
            }
            case ORDER_STATUS_LIST:
                return {
                    ...state,
                    orderStatusList: action.payload
                }
      
        default:
            return state;
    }
}