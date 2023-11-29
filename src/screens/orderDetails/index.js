import { View, Text, Image, ImageBackground, Linking, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import styles from './styles'
import { COLORS, SIZES, images } from '../../constants'
import globalStyles from '../../styles/globalStyles'
import Icons from '../../component/Icons'
import Button1 from '../../component/button/Button1'



const OrderDetails = ({ userData, navigation, route, }) => {
    const [active, setActive] = useState(0)
    const [loading, setLoading] = useState(false)
    let item = route.params?.data
    let address = `${item?.Address_Details?.[0].address} ${item?.Address_Details?.[0].locality} ${item?.Address_Details?.[0].city} ${item?.Address_Details?.[0].state} ${item?.Address_Details?.[0].country} ${item?.Address_Details?.[0].pincode}`
    // console.log("route data order details : ", item)
    let quantity = 0;
    item.Item_Details?.forEach(element => {
        quantity += element.qty
    });


    return (
        <View style={globalStyles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />
            {/* header */}
            <View
                style={styles.header_bg}
            >
                <ImageBackground source={images.header_bg} style={styles.header_row}>
                    <TouchableOpacity style={styles.back_btn}
                        onPress={() => navigation?.goBack()}
                    >
                        <Icons name={"back"} size={22} color={COLORS.white} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Order No {item?.order_id}</Text>
                </ImageBackground>

                {/* user box */}
                <View style={styles.user_box}>
                    <View style={styles.user_row}>
                        <Image source={item?.Customer_Image ? { uri: item.Customer_Image } : images.profile} style={styles.profile} resizeMode='contain' />

                        <View >
                            <Text style={styles.user_name}>{item?.Customer_Details?.customer_name}</Text>
                            <Text style={styles.subtitle}>Ordered by</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.call_btn}
                        onPress={() => Linking.openURL(`tel:${item?.Customer_Details?.phone_number}`)}
                    >
                        <Icons name={"call"} size={20} color={COLORS.secondary} />
                    </TouchableOpacity>
                </View>

                {/* deliver box */}
                <View style={styles.box}>
                    <View>
                        <Text style={styles.deliver}>{item.Status_Details?.label_name}</Text>
                        <Text style={styles.subtitle}>Order status</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.order_btn}>
                        <Icons name={"order"} size={20} color={COLORS.secondary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.btn_row}>
                    <TouchableOpacity activeOpacity={0.5} style={[styles.btn, active == 0 && { backgroundColor: COLORS.white }]}
                        onPress={() => setActive(0)}
                    >
                        <Text style={[styles.btn_text, active == 0 && { color: COLORS.primary }]}>Order Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={[styles.btn, active == 1 && { backgroundColor: COLORS.white }]}
                        onPress={() => setActive(1)}
                    >
                        <Text style={[styles.btn_text, active == 1 && { color: COLORS.primary }]}>Cloth List</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* order info */}
                {active == 0 ?
                    <>
                        {/* order container */}
                        <View style={styles.order_box}>
                            <View style={styles.order_row}>
                                <Text style={styles.order_id}>Order No {item?.order_id}</Text>
                            </View>
                            <View style={styles.order_row}>
                                <Text style={styles.key}>Pickup Date</Text>
                                <Text style={styles.value}>{item?.pickup_date?.split(" ")?.[0]}</Text>
                            </View>
                            <View style={styles.order_row}>
                                <Text style={styles.key}>Pickup Time</Text>
                                <Text style={styles.value}>{item?.pickup_time}</Text>
                            </View>
                            <View style={styles.order_row}>
                                <Text style={styles.key}>Delivery Date</Text>
                                <Text style={styles.value}>{item?.delivery_date?.split(" ")?.[0]}</Text>
                            </View>
                            <View style={styles.order_row}>
                                <Text style={styles.key}>Delivery Time</Text>
                                <Text style={styles.value}>{item?.delivery_time}</Text>
                            </View>
                        </View>

                        {/* pickup address container */}
                        <View style={styles.order_box}>
                            <View style={styles.order_row}>
                                <Text style={styles.order_id}>Delivery address</Text>
                            </View>
                            <Text style={styles.address}>{address}</Text>
                        </View>

                        {/* note container */}
                        <View style={styles.order_box}>
                            <View style={styles.order_row}>
                                <Text style={styles.order_id}>Note</Text>
                            </View>
                            <Text style={styles.address}>Call Before come to Pickup</Text>
                        </View>
                    </>
                    :
                    <>
                        <View style={styles.order_box}>
                            <View style={[styles.order_row, { alignItems: 'center' }]}>
                                <Text style={[styles.head, { width: SIZES.width * .3, }]}>Items Summery</Text>
                                <Text style={[styles.head, { width: SIZES.width * .3, }]}>Order</Text>
                                <Text style={[styles.head, { width: SIZES.width * .12, }]}>Qty</Text>
                            </View>
                            {item?.Item_Details?.map((item, index) => (
                                <View key={index} style={styles.order_row}>
                                    <Text style={[styles.row_title, { width: SIZES.width * .3, }]}>{item.product_name}</Text>
                                    <Text style={[styles.row_text, { width: SIZES.width * .3, }]}>{item.service_name}</Text>
                                    <Text style={[styles.row_text, { width: SIZES.width * .12, }]}>{item.qty}</Text>
                                </View>
                            ))}
                            <View style={styles.order_row1}>
                                <Text style={styles.row_title}>Total Items Quantity</Text>
                                <Text style={styles.row_title}>{quantity}</Text>
                            </View>

                        </View>
                    </>
                }
                <View>
                    <View style={styles.row}>
                        <Text style={styles.order_id}>{item?.Payment_Mode_Details?.payment_mode}</Text>
                        <Text style={styles.order_id}>${item.total}</Text>
                    </View>
                    {/* <Button1 style={styles.btn1}
                onPress={handleUpdateStatus}
                >
                    Mark Picked up
                </Button1> */}
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    // loading: state.home.loading,

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)