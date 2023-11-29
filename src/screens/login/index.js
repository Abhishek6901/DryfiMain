import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StatusBar,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Button1 from '../../component/button/Button1';
import Icons from '../../component/Icons';
import InputWithIcon from '../../component/input/InputWithIcon';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import {COLORS, SIZES} from '../../constants';
import styles from './styles';
import {RNToasty} from 'react-native-toasty';
import globalStyles from '../../styles/globalStyles';
import {
  AuthFunction,
  GoogleLoginApi,
  LoginApi,
} from '../../redux/actions/authActions';
import Loading from '../../component/loading';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {googleLogin} from '../../services/socialLogin';
import {getDeviceToken} from '../../services/notification';
import Loader from '../../component/Loader';

const Login = ({navigation, LoginApi, AuthFunction, GoogleLoginApi}) => {
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const [fcmToken, setFcmToken] = useState(true);

  const [postData, setPostData] = useState({
    email: null,
    password: null,
  });
  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (postData.email && postData.password) {
      // LoginApi(postData, (data) => setLoading(data))
      LoginApi({...postData, fcm_token: fcmToken}, data => setLoading(data));
      setPostData({
        email: null,
        password: null,
      });
    } else {
      RNToasty.Error({
        title: 'Please fill all fields',
        duration: 2,
      });
    }
  };

  useEffect(() => {
    handleToken();
  }, []);

  const handleToken = async () => {
    if (Platform.OS == 'android') {
      getDeviceToken()
        .then(deviceToken => {
          console.log('response device token : ', deviceToken);
          setFcmToken(deviceToken);
        })
        .catch(err => {
          console.log('deviceToken error : ', err);
        });
    } else {
      console.log('error permission');
    }
  };

  const handleGoogleLogin = async () => {
    // let user = googleLogin((data) => setLoading(data))
    let user = await signIn();
    console.log('user details ; ', user);
    if (fcmToken && user) {
      GoogleLoginApi(
        {
          ...user,
          fcm_token: fcmToken,
        },
        data => setLoading(data),
      );
    }
    // GoogleLoginApi(user, (data) => setLoading(data))
  };

  useEffect(() => {
    GoogleSignin.configure();

    // GoogleSignin.configure({
    //   androidClientId: "201510619050-vdo0s940c8e6erej8q1118kfs0ok99vj.apps.googleusercontent.com",
    //   offlineAccess: true,
    //   webClientId: '201510619050-8adcgjn8njm7mk43qld83pq703ud6kqh.apps.googleusercontent.com'
    // });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      // console.log("user info : ", userInfo)
      // setState({ userInfo });
      return userInfo;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('sign in cancel : ', error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('already in progress : ', error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('not available : ', error);
        // play services not available or outdated
      } else {
        console.log(' other error : ');
        // some other error happened
      }
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
      style={globalStyles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <Loader loading={loading} />

      <View style={globalStyles.justify_between}>
        <View style={globalStyles.center}>
          <View style={globalStyles.title_box}>
            <Text style={globalStyles.title}>Log In Now</Text>
            <Text style={globalStyles.text}>
              Please login to continue using our app
            </Text>
          </View>

          <InputWithIcon
            placeholder={'Email Address'}
            leftIcon={'email'}
            value={postData.email}
            onChangeText={text => handleChange('email', text)}
          />

          <InputWithIcon1
            placeholder={'Password'}
            leftIcon={'lock'}
            rightIcon={secure ? 'eye-off' : 'eye'}
            onPress={() => setSecure(!secure)}
            secureTextEntry={secure}
            value={postData.password}
            onChangeText={text => handleChange('password', text)}
          />
          <View style={styles.box}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}
              style={styles.forget_btn}>
              <Text style={styles.forget_text}>Forgot Your Password?</Text>
            </TouchableOpacity>
          </View>
          <Button1
            disabled={loading}
            // loading={loading}
            onPress={handleSubmit}>
            Login
          </Button1>

          {/* <View style={globalStyles.center}>
            <View style={styles.or_box}>
              <Text style={styles.or}>Or</Text>
            </View>
          </View> */}

          {/* 
            <View style={styles.btnRow}>
            <TouchableOpacity style={styles.socailBtn}
              // onPress={() => googleLogin(GoogleLoginApi, (data) => setLoading(data))}
              onPress={handleGoogleLogin}
            >
              <Icons name={"google"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socailBtn}>
              <Icons name={"facebook"} size={25} color={COLORS.blue} />
            </TouchableOpacity>
            {/* <LoginButton
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    console.log("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    console.log("login is cancelled.");
                  } else {
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        console.log(data.accessToken.toString())
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => console.log("logout.")} /> 
          </View> 
          */}
        </View>

        <View style={globalStyles.row}>
          <Text style={globalStyles.text}>Don’t have an account? </Text>
          <TouchableOpacity
            style={styles.signup_btn}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signup_text}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  LoginApi,
  AuthFunction,
  GoogleLoginApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
