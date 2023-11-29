import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SIZES, icons, images} from '../../constants';
import Icons from '../../component/Icons';
import styles from './styles';
import {Image, Text} from 'react-native';
import account from '../../screens/account';
import HeaderLeft from '../../component/Header/HeaderLeft';
import Order from '../../screens/order';
import notification from '../../screens/notification';
import Earning from '../../screens/earning';
import home from '../../screens/home';

const Tab = createBottomTabNavigator();

const tabOptions = {
  activeTintColor: COLORS.white,
  // tabBarInActiveTintColor: COLORS.white,
};

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: COLORS.white,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({focused}) => {
          const tabBarLabelStyle = focused
            ? styles.activeLabelStyle
            : styles.inactiveLabelStyle;
          switch (route.name) {
            case 'Home':
              return <Text style={tabBarLabelStyle}>Home</Text>;
            case 'Order':
              return <Text style={tabBarLabelStyle}>Orders</Text>;
            case 'Notification':
              return <Text style={tabBarLabelStyle}>Notification</Text>;
            case 'Earning':
              return <Text style={tabBarLabelStyle}>Earnings</Text>;
            case 'Account':
              return <Text style={tabBarLabelStyle}>Account</Text>;
          }
        },
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : null;
          switch (route.name) {
            case 'Home':
              return (
                <Icons
                  name={focused ? 'home' : 'home_outline'}
                  size={25}
                  color={tintColor}
                />
              );
            case 'Order':
              return (
                <Icons
                  name={focused ? 'order' : 'order_outline'}
                  size={25}
                  color={tintColor}
                />
              );
            case 'Notification':
              return (
                <Icons
                  name={focused ? 'notification' : 'notification_outline'}
                  size={25}
                  color={tintColor}
                />
              );
            case 'Earning':
              return (
                <Icons
                  name={focused ? 'earning' : 'earning_outline'}
                  size={25}
                  color={tintColor}
                />
              );
            case 'Account':
              return (
                <Icons
                  name={focused ? 'profile' : 'profile_outline'}
                  size={25}
                  color={tintColor}
                />
              );
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={home}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={() => ({
          headerShown: false,
        })}
      />
      {/* <Tab.Screen name="Notification" component={notification}
                options={() => ({
                    header:() => (
                        <HeaderLeft navigation={navigation}  title={"Notification"} />
                    ),
                })}
            /> */}

      {/* <Tab.Screen name="Earning" component={Earning}
                options={() => ({
                    header:() => (
                        <HeaderLeft navigation={navigation}  title={"Earnings"} />
                    ),
                })}
            /> */}

      <Tab.Screen
        name="Account"
        component={account}
        options={() => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Profile'} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
