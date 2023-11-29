import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import {COLORS, SIZES, images} from '../../constants';
import globalStyles from '../../styles/globalStyles';
import Button1 from '../../component/button/Button1';
import Loading from '../../component/loading';
import {GetDailyReport} from '../../redux/actions/homeAction';
import messaging from '@react-native-firebase/messaging';
import {notificationListener} from '../../services/notification';
import Geolocation from 'react-native-geolocation-service';
import {CURRENT_LAT_LONG} from '../../redux/types';
import {useIsFocused} from '@react-navigation/native';

const Card = ({total, title, source, bgColor}) => {
  return (
    <View style={{...styles.card, backgroundColor: bgColor}}>
      <Image source={source} style={styles.card_image} resizeMode="contain" />
      <Text style={styles.card_total}>{total}</Text>
      <Text style={styles.card_title}>{title}</Text>
    </View>
  );
};

const Home = ({
  userData,
  navigation,
  notificationListener,
  loading,
  GetDailyReport,
  dailyReport,
}) => {
  const [loadingIndicator, setLoadingIndicator] = useState(false);

  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   GetAssignOrder()
  //   navigation?.navigate("Order")
  //   console.log('Message handled in the background!', remoteMessage);
  // });

  // messaging().getInitialNotification(async remoteMessage => {
  //   GetAssignOrder()
  //   navigation?.navigate("Order")
  //   console.log('Message handled in the background!', remoteMessage);
  // });

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     GetAssignOrder()
  //     // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  // console.log("orl status : ", orderStatusList)
  // console.log("userData order : ", userData?.profile_picture)

  const isFocus = useIsFocused();

  useEffect(() => {
    GetDailyReport();
  }, [isFocus]);

  const [locationCondition, setLocationCondition] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    permission();
  }, []);

  const permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          async position => {
            // console.log("current position : ", position)
            setLocationCondition(false);
            var NY = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            dispatch({
              type: CURRENT_LAT_LONG,
              payload: NY,
            });
          },
          error => {
            console.log('errol locat', error.code, error.message);
            setLocationCondition(true);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        setLocationCondition(true);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Loading loading={loading} />
      {/* header */}
      <View style={styles.header_bg}>
        <ImageBackground source={images.header_bg} style={styles.header_row}>
          <View style={styles.image_box}>
            <Image
              source={
                userData?.profile_picture
                  ? {uri: userData.profile_picture}
                  : images.profile1
              }
              style={styles.profile}
              resizeMode="stretch"
            />
          </View>
        </ImageBackground>

        <View style={styles.profile_box}>
          <Text style={styles.text}>Welcome Back</Text>
          <Text style={styles.user_name}>
            Hello {userData?.driver_details?.delivery_boy_name}
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View>
          <Image source={images.home_banner} style={styles.banner} resizeMode='stretch' />
        </View> */}

        {/* today report container */}
        <View
        // style={{marginBottom: SIZES.height * .02,}}
        >
          <Text style={styles.title}>Your Today Report</Text>
          <View style={styles.card_row}>
            <Card
              total={dailyReport?.Today_All_Orders}
              title={'Total'}
              source={images.active}
              bgColor={'#a7c661'}
            />
            <Card
              total={dailyReport?.Total_Active_Orders}
              title={'Active'}
              source={images.upcoming}
              bgColor={'#619fc6'}
            />
            <Card
              total={dailyReport?.Total_Pending_Orders}
              title={'Pending'}
              source={images.pending}
              bgColor={'#EE4B2B'}
            />
            <Card
              total={dailyReport?.Total_Complete_Orders}
              title={'Completed'}
              source={images.completed}
              bgColor={'#61c6c1'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  userData: state.auth.userData,
  dailyReport: state.home.dailyReport,
});

const mapDispatchToProps = {
  GetDailyReport,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
