import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import notifee, { AndroidImportance, AndroidStyle, EventType } from '@notifee/react-native';
import NavigationService from './NavigationService';
import { useDispatch } from 'react-redux';
import { GetAssignOrder } from '../redux/actions/orderAction';
import PushNotification, {Importance} from "react-native-push-notification";


export const getDeviceToken = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        try {
            const token = await messaging().getToken()
            console.log("fcm token:", token)
            return token
        } catch (error) {
            console.log("error in creating token")
        }
    }
}



export const displayNotification = async (title, body, notificationData) => {
    // Request permissions (required for iOS)
    await notifee.requestPermission()
    let obj = Object.fromEntries(Object.entries(notificationData).filter(([_, v]) => v != null));
    console.log("displayNotification service : ", obj);

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });

    // Display a notification

    await notifee.displayNotification({
        title: title,
        body: body,
        data: obj,
        android: {
            channelId,
            pressAction: {
                id: 'default',
            },
        },
    });
}


export const sendNotification = async (token, notificationData) => {
    let obj = Object.fromEntries(Object.entries(notificationData).filter(([_, v]) => v != null));
    // console.log("displayNotification service : ", obj);
    console.log("enter send notification : ", notificationData)
    // const channelId = await notifee.createChannel({
    //     id: 'default',
    //     name: 'Default Channel',
    // });



    var data = JSON.stringify({
        // data: obj,
        data: notificationData,
        notification: {
            body: 'click to open check Post',
            title: 'New Post Added',
        },
        to: token,

    });
    var config = {
        method: 'post',
        url: 'https://fcm.googleapis.com/fcm/send',
        headers: {
            Authorization:
                // 'key=AAAAxsV5B9s:APA91bERGEDrzb5hrs3pZznyV8xqMsW1eZVQOnmiAgWY4YmdAuI3wC818v5V_GaqwF_vvrc1aKOPJ_gnQb5x0f4kKrUH3pECsYj31s0rkxvXMtlSN8UVuT2kegAAGUj8OFuQLw7GWQX9',
                'key=AAAAMUY2Zzo:APA91bG88MPDxktK2gq9MhVfIaarEn3XmpQr-dII1ptWHjMSkddI7hH3Yw6lwOeerCORjqtX0hotz7MQHn7OyQzGeqb5jGGKBDASARAxgTJsubLn322XvGa4EAdkC-nqo085vnBKjHgK',
            'Content-Type': 'application/json',
        },
        data: data,
    };
    axios(config)
        .then(function (response) {
            console.log("send notification response : ", JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log("send notification error : ", error);
        });
}


export const notificationListener = () => async dispatch => {

    const unsubscribe = await messaging().onMessage(async remoteMessage => {

        dispatch(GetAssignOrder())

        console.log('A new FCM message arrived!', remoteMessage);

        const { data, notification } = remoteMessage
        let count = 0
        if (count == 0) {
            count = 1;
            displayNotification(notification.title, notification.body, data)
        }

    });

    notifee.onBackgroundEvent(async ({ type, detail }) => {
        const { notification, pressAction } = detail;
        switch (type) {
            case EventType.DISMISSED:
                console.log('onBackgroundEvent User dismissed notification', notification);
                break;
            case EventType.PRESS:
                console.log('onBackgroundEvent User pressed notification', notification);
                setTimeout(() => {
                    NavigationService.navigate("Order", { data: notification?.data})
                }, 1200);
                break;
        }
    });

    notifee.onForegroundEvent(({ type, detail }) => {
        const { notification, pressAction } = detail;
        switch (type) {
            case EventType.DISMISSED:
                console.log('onForegroundEvent User dismissed notification', notification);
                break;
            case EventType.PRESS:
                console.log('onForegroundEvent User pressed notification', notification.data);
                NavigationService.navigate("Order", { data: notification?.data })
                break;
        }
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage,
        );

        // setTimeout(() => {
        //     NavigationService.navigate("TripDetails", { data: remoteMessage?.data })
        // }, 1200);

    });

    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
                setTimeout(() => {
                    NavigationService.navigate("Order", { data: remoteMessage?.data})
                }, 1200);

            }
        });

    return unsubscribe;
}

export const channel_create = () =>{
    PushNotification.createChannel(
    {
      channelId: "laundry_booking", // (required)
      channelName: "Order", // (required)
      channelDescription: "Laundry Testing Solution", // (optional) default: undefined.
      playSound: true, // (optional) default: true
    //   soundName: "uber.mp3", // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  export const configure = () =>{
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token.token);
        global.fcm_token = token.token;
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  }