import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import {  DAILY_REPORT, EARNING, LOADING, } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const GetDailyReport = (cb) => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    cb && cb(true)
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.get(`driver_daily_report?did=${userId}`)
        .then(async response => {
            if (response.data?.response) {
                dispatch({
                    type: DAILY_REPORT,
                    payload: response.data.data,
                })
                // RNToasty.Success({
                //     title: .response.data.message,
                //     duration: 2,
                // });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                cb && cb(false)
                
            } else {
                cb && cb(false)
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
            }
        })
        .catch(error => {
            cb && cb(false)
            dispatch({
                type: LOADING,
                payload: false,
            });
            // console.log("user data error : ", error.response.data)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};


export const GetEarning = (cb) => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")

    cb && cb(true)
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.get(`driver_earning_data?did=${userId}`)
        .then(async response => {
            if (response.data?.response) {
                dispatch({
                    type: EARNING,
                    payload: response.data.data,
                })
                // RNToasty.Success({
                //     title: .response.data.message,
                //     duration: 2,
                // });
                cb && cb(false)
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                
            } else {
                cb && cb(false)
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
            }
        })
        .catch(error => {
            cb && cb(false)
            dispatch({
                type: LOADING,
                payload: false,
            });
            // console.log("user data error : ", error.response.data)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};