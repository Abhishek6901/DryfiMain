import {RNToasty} from 'react-native-toasty';
import http from '../../services/api';
import {
  ASSIGN_ORDER,
  COMPLETED_ORDER,
  LOADING,
  ORDER_STATUS_LIST,
} from '../types';
import {formDataHeader} from '../../services/formDataHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import objectToFormData from '../../services/objectToFormData';

export const GetAssignOrder = cb => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');
  // console.log("get assign order userid : ", userId)
  dispatch({
    type: LOADING,
    payload: true,
  });
  cb && cb(true);
  http
    .get(`driver_assigned_orders?did=${userId}`)
    .then(async response => {
      if (response.data?.response) {
        dispatch({
          type: ASSIGN_ORDER,
          payload: response.data.data,
        });
        cb && cb(false);
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
        cb && cb(false);
        // RNToasty.Info({
        //     title: response.data.message,
        //     duration: 2,
        // });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      cb && cb(false);
      // console.log("user data error : ", error.response.data)
      // RNToasty.Error({
      //     title: error.response.data.message,
      //     duration: 2,
      // });
    });
};

export const GetCompletedOrder = cb => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');
  // console.log("get assign order userid : ", userId)
  dispatch({
    type: LOADING,
    payload: true,
  });
  cb && cb(true);
  http
    .get(`driver_complete_orders?did=${userId}`)
    .then(async response => {
      if (response.data?.response) {
        dispatch({
          type: COMPLETED_ORDER,
          payload: response.data.data,
        });
        cb && cb(false);
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
        cb && cb(false);
        // RNToasty.Info({
        //     title: response.data.message,
        //     duration: 2,
        // });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      cb && cb(false);
      // console.log("user data error : ", error.response.data)
      // RNToasty.Error({
      //     title: error.response.data.message,
      //     duration: 2,
      // });
    });
};

export const UpdateOrderStatus =
  (postData, navigation, cb) => async dispatch => {
    const userId = await AsyncStorage.getItem('@USER_ID');
    // console.log("get assign order userid : ", userId)
    console.log('get assign order id : ', userId, postData);

    postData = await objectToFormData(postData);

    cb && cb(true);
    dispatch({
      type: LOADING,
      payload: true,
    }); //driver_update_status?did=${userId}&orderid=${orderId}
    http
      .post(`driver_update_status`, postData, formDataHeader)
      .then(async response => {
        if (response.data?.response) {
          dispatch(GetAssignOrder());
          dispatch(GetCompletedOrder());
          cb && cb(false);
          navigation.goBack();
          RNToasty.Success({
            title: response.data.message,
            duration: 2,
          });
          dispatch({
            type: LOADING,
            payload: false,
          });
        } else {
          dispatch({
            type: LOADING,
            payload: false,
          });
          cb && cb(false);
          RNToasty.Info({
            title: response.data.message,
            duration: 2,
          });
        }
      })
      .catch(error => {
        dispatch({
          type: LOADING,
          payload: false,
        });
        cb && cb(false);
        console.log('update status error : ', error.response.data);
        RNToasty.Error({
          title: error.response?.data?.message,
          duration: 2,
        });
      });
  };

export const GetOrderStatusList = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`order_status`)
    .then(async response => {
      if (response.data?.response) {
        dispatch({
          type: ORDER_STATUS_LIST,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: .response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
        // RNToasty.Info({
        //     title: response.data.message,
        //     duration: 2,
        // });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      // console.log("user data error : ", error.response.data)
      // RNToasty.Error({
      //     title: error.response.data.message,
      //     duration: 2,
      // });
    });
};
