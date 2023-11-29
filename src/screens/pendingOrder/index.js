import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useEffect, useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import Loading from '../../component/loading';
import {COLORS, SIZES, images} from '../../constants';
import styles from './styles';
import formatDate from '../../utlis/FormatDate';
import LinearGradient from 'react-native-linear-gradient';
import Button1 from '../../component/button/Button1';
import Icons from '../../component/Icons';
import {connect} from 'react-redux';
import {UpdateOrderStatus} from '../../redux/actions/orderAction';
import Modal from 'react-native-modal';
import Input1 from '../../component/input/Input1';
import {launchCamera} from 'react-native-image-picker';

const PendingOrder = ({
  navigation,
  route,
  loading,
  UpdateOrderStatus,
  userData,
}) => {
  const {item, address, quantity, orderStatusList} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [orderStatus, setOrderStatus] = useState('Status');
  const [clickedImage, setClickedImage] = useState([]);
  const [postData, setPostData] = useState({
    bag_no: '',
    weight: '',
    note: '',
  });

  const userCords = {
    longitude: Number(item?.Address_Details[0].longitude),
    latitude: Number(item?.Address_Details[0].latitude),
  };

  const selectPhotos = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode || res.errorMessage) {
        console.log(
          'ImagePicker Error: ',
          res.errorCode + ' ' + res.errorMessage,
        );
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else if (res.assets) {
        setClickedImage(prev => [...prev, ...res.assets]);
        setPostData({
          ...postData,
          multi_images: clickedImage,
        });
      }
    });
  };

  const getStatusText = () => {
    orderStatusList?.forEach(i => {
      if (i?.Order_Status?.id == item.status + 1) {
        setOrderStatus(i?.Order_Status?.label_for_delivery_boy);
      }
    });
  };

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const readyToPickup = item => {
    let data = {
      did: userData.driver_details.id,
      orderid: item.order_id,
      status: item.status + 1,
    };
    UpdateOrderStatus(data, navigation);
  };

  const markPickUp = () => {
    const obj = {
      did: userData?.driver_details?.id,
      orderid: item.order_id,
      bag_no: postData.bag_no,
      weight: postData.weight,
      note: postData.note,
      multi_images: clickedImage,
      status: 4,
    };

    UpdateOrderStatus(obj, navigation);
    setModalVisible(false);
  };

  const readyTodeliver = () => {
    let data = {
      did: userData.driver_details.id,
      orderid: item.order_id,
      status: 6,
    };
    UpdateOrderStatus(data, navigation);
  };

  const completedFunc = () => {
    let data = {
      did: userData.driver_details.id,
      orderid: item.order_id,
      status: 7,
    };
    UpdateOrderStatus(data, navigation);
  };

  useEffect(() => {
    getStatusText();
  }, [item]);

  console.log('This is the item status', item.status);

  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      {/* <Loading loading={loading} /> */}
      <View style={styles.header_bg}>
        <ImageBackground source={images.header_bg} style={styles.header_row}>
          <TouchableOpacity
            style={styles.back_btn}
            onPress={() => navigation?.goBack()}>
            <Icons name={'back'} size={22} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.title}>Pending Order</Text>
        </ImageBackground>
      </View>
      <ScrollView>
        <LinearGradient
          colors={['#B70689', '#7E1090']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.user_row_top}>
          <Image
            source={
              item.Customer_Image ? {uri: item.Customer_Image} : images.profile
            }
            style={styles.user_pic}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.cus_name}>
              {item.Customer_Details?.customer_name}
            </Text>
            <Text style={styles.subtitle}>Customer Name</Text>
          </View>
        </LinearGradient>
        <Text style={styles.readyHeading}>Ready to Pickup</Text>

        {/*  card  */}
        <View style={{marginVertical: 10}}>
          <LinearGradient
            colors={['#B70689', '#7E1090']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.user_row}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 120,
              }}>
              <Text style={styles.cus_name}>
                {/* {item.Customer_Details?.customer_name} */} Order #
                {item?.order_id}
              </Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('MapScreen', {
                    userCoords: userCords,
                  })
                }>
                <Text style={[styles.subtitle, {textAlign: 'center'}]}>
                  {' '}
                  <Icons
                    name={'location_pending'}
                    size={25}
                    color={COLORS.white}
                  />
                  {'\n'}
                  Location{' '}
                </Text>
              </Pressable>
            </View>
          </LinearGradient>

          <View style={[styles.order_box]}>
            {/* content of box */}
            <View>
              <View style={styles.textBox}>
                <Text style={styles.text}>Pickup Date</Text>
                <Text style={styles.subText}>
                  {formatDate(item.pickup_date)}
                </Text>
              </View>
              <View style={styles.horizontalLine} />
              <View style={styles.textBox}>
                <Text style={styles.text}>Pickup Time</Text>
                <Text style={styles.subText}>{item.pickup_time}</Text>
              </View>

              <View style={styles.horizontalLine} />
              <View style={styles.textBox}>
                <Text style={styles.text}>Delivery Address</Text>
                <Text style={styles.subText}>{address}</Text>
              </View>
              <View style={[styles.horizontalLine]} />
              <View style={styles.textBox}>
                <Text style={styles.text}>Bag No.</Text>
                <Text style={styles.subText}>{item.bag_id}</Text>
              </View>
              <View style={[styles.horizontalLine]} />
              <View style={styles.textBox}>
                <Text style={styles.text}>Weight</Text>
                <Text style={styles.subText}>{item.weight}</Text>
              </View>
              <View style={[styles.horizontalLine]} />
              <View style={styles.textBox}>
                <Text style={styles.text}>Note</Text>
                <Text style={styles.subText}>note</Text>
              </View>
              <View style={[styles.horizontalLine]} />
              <View style={styles.textBox}>
                <Text style={styles.text}>Quantity</Text>
                <Text style={styles.subText}>{item.total_quantity} Items</Text>
              </View>
              <View style={styles.horizontalLine} />

              <View style={styles.textBox}>
                <Text style={styles.text}>Total Amount</Text>
                <Text style={[styles.subText, styles.totalText]}>
                  ₹ {item.total}
                </Text>
              </View>
              <View style={styles.horizontalLine} />
              <Button1
                onPress={() => {
                  if (item.status == 2) {
                    readyToPickup(item);
                  } else if (item.status == 3) {
                    setModalVisible(true);
                  } else if (item.status == 4) {
                    console.log('This is status 4');
                    alert('This order is in Processing');
                  } else if (item.status == 5) {
                    readyTodeliver();
                  } else if (item.status == 6) {
                    completedFunc();
                  }
                }}
                style={{
                  borderRadius: 50,
                  width: 170,
                  marginVertical: 20,
                }}>
                {item.status == 4 ? 'Processing...' : orderStatus}
              </Button1>
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalbox}>
          <Button1
            children="Mark Bag number and Weight"
            style={styles.modal_btn}
          />
          <TouchableOpacity
            style={styles.cancel_btn}
            activeOpacity={0.5}
            onPress={() => setModalVisible(false)}>
            <Icons
              name={'close'}
              size={SIZES.width * 0.05}
              color={COLORS.black}
            />
          </TouchableOpacity>

          <View>
            <Input1
              placeholder={'Bag Number'}
              onChangeText={text => handleChange('bag_no', text)}
              value={postData.bag_no}
              //   onFocus={() => setFieldTouched("name")}
              //   error={touched.name && errors.name}
              inputStyle={{width: SIZES.width * 0.8}}
            />
            <Input1
              placeholder={'Weight in Kg'}
              onChangeText={text => handleChange('weight', text)}
              value={postData.weight}
              keyboardType="numeric"
              // maxLength={10}
              //   onFocus={() => setFieldTouched("phone")}
              //   error={touched.phone && errors.phone}
              inputStyle={{width: SIZES.width * 0.8}}
            />
            <Input1
              placeholder={'Note'}
              onChangeText={text => handleChange('note', text)}
              value={postData.note}
              keyboardType="text"
              // maxLength={10}
              //   onFocus={() => setFieldTouched("phone")}
              //   error={touched.phone && errors.phone}
              inputStyle={{width: SIZES.width * 0.8}}
            />
            <TouchableOpacity
              onPress={selectPhotos}
              style={{width: SIZES.width * 0.5, alignSelf: 'center'}}>
              <Text
                style={{
                  color: COLORS.primary,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Select Photos
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginVertical: 10,
              }}>
              {clickedImage.map(item => {
                return (
                  <Image
                    key={item?.uri}
                    source={{uri: item?.uri}}
                    style={{height: 50, width: 50, margin: 5}}
                  />
                );
              })}
            </View>
            <Button1
              children="Mark Picked Up"
              // onPress={() => setModalVisible(false)}
              onPress={() => markPickUp()}
              // onPress={() => {BulkOrderApi(postData, (data) => setLoading(data)), setModalVisible(false)}}
              style={{
                marginVertical: SIZES.height * 0.02,
                width: SIZES.width * 0.5,
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.order.loading,
  userData: state.auth.userData,
});

const mapDispatchToProps = {
  UpdateOrderStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(PendingOrder);
