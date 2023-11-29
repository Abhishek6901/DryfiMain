import { combineReducers } from "redux";
import auth from "./auth";
import home from "./home";
import notification from "./notification";
import order from './order'


export default combineReducers({
    auth,
    home,
    notification,
    order,
})