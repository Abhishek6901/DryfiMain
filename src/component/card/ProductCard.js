import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../../constants'
import Stars from 'react-native-stars';
import { useState } from 'react';
import Icons from '../Icons';

const ProductCard = ({ productName, deletePress, totalPrice, source, marginTop, marginBottom, onPress, setQuantity, price, quantity }) => {
    // console.log("quantity : ", quantity)
    // const [quantity, setQuantity] = useState(0)
    const [count, setCount] = useState(0)

    return (
        // <View style={[styles.card, { marginTop: marginTop }]}>
        <View style={[styles.card, { marginTop: marginTop }, marginBottom && { marginBottom: marginBottom }]}>
            {/* <TouchableOpacity style={[styles.card, { marginTop: marginTop }]}
            onPress={onPress}
        > */}
            <View style={[styles.image_box]}>
                <Image source={source} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.content_box}>
                <View>
                    <Text style={styles.product_name}>{productName}</Text>
                    <Text style={styles.price}>{price}/item</Text>
                </View>
                {/* <Text style={styles.price}>{totalPrice && `Total: ₹${totalPrice}` }</Text> */}
                {/* quantity row */}
                <View style={styles.quan_row}>
                    <TouchableOpacity activeOpacity={0.5}
                        // onPress={() => setCount(count + 1)}
                        onPress={() => setQuantity && setQuantity(quantity + 1)}
                        style={{ ...styles.count_btn, borderRightWidth: 1, }}
                    >
                        <Icons name={"plus"} size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                    {/* <Text style={styles.count_text}>{count}</Text> */}
                    <Text style={styles.count_text}>{quantity}</Text>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => quantity > 0 && setQuantity && setQuantity(quantity - 1)}
                        // onPress={() => count > 0 && setCount(count - 1)}
                        style={{ ...styles.count_btn, borderLeftWidth: 1, }}
                    >
                        <Icons name={"minus"} size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>


            {/* button box */}
            {quantity > 0 && 
            <>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.edit_btn}
                    onPress={onPress}
                >
                    <Icons name={"edit1"} size={20} color={COLORS.black} />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.delete_btn}
                    onPress={() => setQuantity(0)}
                // onPress={() => { setQuantity(0), deletePress }}
                >
                    <Icons name={"delete"} size={20} color={COLORS.danger} />
                </TouchableOpacity>
            </>
            }
            {/* <TouchableOpacity
                activeOpacity={0.5}
                style={styles.edit_btn}
                onPress={onPress}
            >
                <Icons name={"options"} size={20} color={COLORS.black} />
            </TouchableOpacity> */}



            {/* </TouchableOpacity> */}
        </View>
    )
}

ProductCard.defaultProps = {
    productName: null,
    source: images.primWash,
    marginTop: null,
    price: 0,
    quantity: 0,
    setQuantity: null,
    deletePress: null,
}

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        width: SIZES.width * .9,
        //   height: SIZES.width * .31,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        // alignItems: 'center',
        alignSelf: 'center',
        // marginTop: SIZES.height * .025,
        marginBottom: SIZES.height * .025,
        padding: SIZES.width * .03,
        elevation: 4,
        // borderWidth: 1,
        borderColor: COLORS.gray30,
        borderRadius: SIZES.width * .03,
        overflow: 'hidden',
    },

    image_box: {
        width: SIZES.width * .25,
        height: SIZES.width * .25,
        backgroundColor: COLORS.light7,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .03,
        borderWidth: 0.7,
        borderColor: COLORS.gray30,
        borderRadius: SIZES.width * .03,
    },

    image: {
        width: SIZES.width * .2,
        height: SIZES.width * .2,
    },

    content_box: {
        width: SIZES.width * .45,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // borderWidth: 1,
    },

    product_name: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .045,
        color: COLORS.primary,
        // color: COLORS.white,
        marginBottom: -6,
    },

    price: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .038,
        color: COLORS.primary,
        // color: COLORS.white,
        marginBottom: -4,
    },

    // ============ count button ================
    quan_row: {
        width: SIZES.width * .22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: SIZES.width * .014,
        borderColor: COLORS.primary,
        overflow: 'hidden',
    },
    count_btn: {
        width: SIZES.width * .07,
        height: SIZES.width * .07,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.primary,
    },

    count_text: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .036,
        color: COLORS.primary,
        marginBottom: -2,
    },

    // ============ buttons ===========
    edit_btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        borderBottomLeftRadius: SIZES.width * .03,
        backgroundColor: COLORS.light,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
    },

    delete_btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        borderTopLeftRadius: SIZES.width * .03,
        backgroundColor: COLORS.light,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
})