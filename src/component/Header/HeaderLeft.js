import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import Icons from '../Icons';


const HeaderLeft = ({ title, navigation, }) => {

    return (
        <View
            style={styles.header}
        >
            <ImageBackground source={images.header_bg} style={styles.header_row}>
                <TouchableOpacity style={styles.back_btn}
                    onPress={() => navigation?.goBack()}
                >
                    <Icons name={"back"} size={22} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </ImageBackground>
        </View>
    )
}

HeaderLeft.defaultProps = {
    onPress: null,
    title: null,
}

export default HeaderLeft;

const styles = StyleSheet.create({
    // ========== header =================
    header: {
        width: SIZES.width,
        height: SIZES.height * .16,
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
    },

    header_row: {
        width: SIZES.width,
        height: SIZES.height * .14,
        flexDirection: 'row',
        alignItems: 'center',
      
        // justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * .03,
        marginTop: SIZES.height * -.01,
    },

    back_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: SIZES.width * .03,
    },


    title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .05,
        marginBottom: -4,
        color: COLORS.white,
    },

})