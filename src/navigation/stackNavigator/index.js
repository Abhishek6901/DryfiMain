import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import styles from './styles';
import EditProfile from '../../screens/editProfile';
import HeaderLeft from '../../component/Header/HeaderLeft';
import BottomTab from '../bottomTab';
import PaymentSuccess from '../../screens/paymentSuccess';
import {Image, View} from 'react-native';
import notification from '../../screens/notification';
import UploadDocument from '../../screens/uploadDocument';
import orderDetails from '../../screens/orderDetails';
import NewOrderRequest from '../../screens/newOrderRequest';
import PendingOrder from '../../screens/pendingOrder';
import MapScreen from '../../screens/mapscreen';

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      // initialRouteName='ContactUs'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={() => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Payment Successful'} />
          ),
        })}
      />
      <Stack.Screen
        name="UploadDocument"
        component={UploadDocument}
        options={() => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Upload Document'} />
          ),
        })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={() => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Edit Profile'} />
          ),
        })}
      />
      <Stack.Screen
        name="OrderDetails"
        component={orderDetails}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PendingOrder"
        component={PendingOrder}
        options={() => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="NewOrderRequest"
        component={NewOrderRequest}
        options={() => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'New Order Request'} />
          ),
        })}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={() => ({
          headerShown: false,
        })}
        // options={() => ({
        //   header: () => (
        //     <HeaderLeft navigation={navigation} title={'User Location'} />
        //   ),
        // })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
