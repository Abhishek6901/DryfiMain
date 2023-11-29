import React, { useEffect, useState } from 'react';
import { View, Button, PermissionsAndroid, Platform, StatusBar, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import Button1 from '../../component/button/Button1';
import { COLORS, SIZES, data, icons, images } from '../../constants';
import Loading from '../../component/loading';
import { connect } from 'react-redux';
import styles from './styles';
import NoDataBox from '../../component/noDataBox';
import { GetEarning } from '../../redux/actions/homeAction';


const Earning = ({ navigation, loading, GetEarning, earning}) => {

  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    GetEarning()
  },[])

  return (
    <>
      <View style={globalStyles.container}>
        <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />
        <View style={globalStyles.center}>
          {/* <Text style={styles.title}>Today</Text> */}

          {/* notification container */}

          <View >
            <FlatList
              data={earning && earning}
              renderItem={({ item, index }) => (

                <View style={styles.box}>
                  <View style={styles.box_row}>
                    {/* <Image source={images.user1} style={styles.image} resizeMode='contain' /> */}
                    <View style={styles.text_box}>
                      <Text style={styles.order_id}>Order No {item.Order_No}</Text>
                      <View style={styles.time_row}>
                        <Text style={styles.text}>{item.Delivery_Date}</Text>
                        <Text style={styles.text}>{item.Delivery_Time}</Text>
                      </View>
                      <Text style={styles.earning}>Earned</Text>
                    </View>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.amt}>${item.Total_Amount}</Text>
                    <Text style={styles.text}>Cash Collacted</Text>
                    <Text style={styles.earning}>${item.Earned ? item.Earned : 0}</Text>
                  </View>
                </View>
              )}
              key={item => item.id}
              showsVerticalScrollIndicator={false}
              refreshing={refresh}
              onRefresh={() => setRefresh(!refresh)}
            />
          </View>

        </View>
      </View>
      {/* :
                    <NoDataBox title={"No Notification"} source={images.noNotification} />
            } */}
    </>

  )
}

const mapStateToProps = (state) => ({
  loading: state.home.loading,
  earning: state.home.earning,
})

const mapDispatchToProps = {
  GetEarning
}

export default connect(mapStateToProps, mapDispatchToProps)(Earning)
