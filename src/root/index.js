import React, { useEffect, useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { connect, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN } from '../redux/types';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
import ResetPassword from '../screens/resetPassword';
import { LogBox } from 'react-native';
import OnBoardingScreen from '../screens/onBoardingScreen';
import Header from '../component/Header/Header';
import ForgetPassword from '../screens/forgetPassword';
import Otp from '../screens/otp';
import Notification from '../screens/notification';
import { InitialCall } from '../redux/actions/authActions';
import StackNavigator from '../navigation/stackNavigator';
import messaging from "@react-native-firebase/messaging"
import { notificationListener } from '../services/notification';
import Location from '../screens/location';
import home from '../screens/home';



const Stack = createStackNavigator();

const Root = ({ token, InitialCall }) => {

    const [rootLoading, setRootLoading] = useState(true)
    const dispatch = useDispatch()

    const preLoad = async () => {
        await AsyncStorage.getItem('@USER_TOKEN').then(value => {
            // console.log(value)
            if (value) {
                dispatch({
                    type: AUTH_TOKEN,
                    payload: value
                })
                setRootLoading(false)
            } else {
                setRootLoading(false)
            }
        })
            .catch(err => console.log("Root error : ", err))

    }

    // messaging().setBackgroundMessageHandler(async remoteMessage => {
    //   // ...is not working
    //   console.log('Message handled in the background!', remoteMessage);
    // });

    useEffect(() => {
        preLoad()
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    useEffect(() => {
        dispatch(notificationListener())
        InitialCall()
    }, [])


    // console.log("root token : ", token)
    // token = null

    return (
        <>
            {token == null ?
                <Stack.Navigator
                    // initialRouteName='OnBoardingScreen'
                    screenOptions={() => ({
                        // headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    })}>
                    {/* <Stack.Screen name="Location" component={Location} /> */}

                    <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen}
                        options={({ navigation }) => ({
                            header: () => (
                                <Header />
                            )
                        })}
                    />
                    <Stack.Screen name="Login" component={Login}
                        options={({ navigation }) => ({
                            header: () => (
                                <Header navigation={navigation} />
                            ),
                        })}
                    />
                    <Stack.Screen name="SignUp" component={SignUp}
                        options={({ navigation }) => ({
                            header: () => (
                                <Header navigation={navigation} />
                            ),
                        })}
                    />
                    <Stack.Screen name="Otp" component={Otp}
                        options={({ navigation }) => ({
                            header: () => (
                                <Header navigation={navigation} />
                            ),
                        })}
                    />
                    <Stack.Screen name="ResetPassword" component={ResetPassword}
                        options={({ navigation }) => ({
                            header: () => (
                                <Header navigation={navigation} />
                            ),
                        })}
                    />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword}
                        options={({ navigation }) => ({
                            header: () => (
                                <Header navigation={navigation} />
                            ),
                        })}
                    />
                </Stack.Navigator>
                :
                <Stack.Navigator
                    initialRouteName='StackNavigator'
                    screenOptions={() => ({
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    })}>
                    <Stack.Screen
                        name="StackNavigator"
                        component={StackNavigator}
                    />
                </Stack.Navigator>
            }
        </>
    );
}
const mapStateToProps = (state) => ({
    token: state.auth.token,
    // userData: state.auth.userData,
})

const mapDispatchToProps = {
    InitialCall
}
export default connect(mapStateToProps, mapDispatchToProps)(Root);