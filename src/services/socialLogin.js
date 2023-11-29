import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { getDeviceToken } from "./notification";

// export const googleLogin = (callBackApi = null) => {
//     GoogleSignin.configure({
//       // androidClientId: '641658019215-iqdgdi3mc850sops7mv93ejui9sb15vb.apps.googleusercontent.com',             // release
//       androidClientId: '641658019215-fmksg76juhcd0lracf83iqcgst2afbta.apps.googleusercontent.com',          //debug 
//       // 122352203877-k8ji2qpccnmtddeboe9vlcf1gsjimkpg.apps.googleusercontent.com
//       // iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
//       offlineAccess: true,
//       webClientId: '641658019215-nnt6rmqk6c784m1nengp564v9pjc2p9d.apps.googleusercontent.com',
//     });



//     GoogleSignin.hasPlayServices().then((hasPlayService) => {
//       if (hasPlayService) {
//         GoogleSignin.signIn().then((userInfo) => {
//           callBackApi(userInfo)
//           console.log(JSON.stringify(userInfo), JSON.stringify(userInfo.user.email))
//         }).catch((e) => {
//           console.log("ERROR IS: " + JSON.stringify(e));
//         })
//       }
//     }).catch((e) => {
//       console.log("ERROR IS: " + JSON.stringify(e));
//     })
//   }



export const googleLogin = async (callBackApi = null,cb) => {
  cb && cb(true)
  let token;

  getDeviceToken().then(deviceToken => {
    console.log("response device token : ", deviceToken);
    token = deviceToken
  }).catch(err => {
    console.log("deviceToken error : ", err);
  })

  GoogleSignin.configure({
    // androidClientId: "243863987460-psp5qbhfnotf6ujiauec4e3bt4tpbs38.apps.googleusercontent.com",    // debug
    androidClientId: "243863987460-a0kn7qnb1102pgqqdt7j3djeg44o3ngn.apps.googleusercontent.com",   //release
    offlineAccess: true,
    webClientId: "243863987460-3nu90dtrspp8uofs3kv8r8jv6an6n78e.apps.googleusercontent.com"
  });

 
  GoogleSignin.hasPlayServices().then((hasPlayService) => {
    if (hasPlayService) {
      GoogleSignin.signOut()
      GoogleSignin.signIn().then((userInfo) => {
        callBackApi({...userInfo, "fcm_token": token})
        console.log("user info : ", JSON.stringify(userInfo), JSON.stringify(userInfo.user.email))
        cb && cb(false)
        // return userInfo
      }).catch((e) => {
        console.log("ERROR IS: " + JSON.stringify(e));
        cb && cb(false)
        // return null
      })
    }
  }).catch((e) => {
    console.log("ERROR IS: " + JSON.stringify(e));
    cb && cb(false)
    // return null
  })
}
