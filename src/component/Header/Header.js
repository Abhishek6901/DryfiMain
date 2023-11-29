import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';


const Header = () => {

    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <Image
                    source={images.header_bg}
                    style={styles.image}
                    // resizeMode='stretch'
                />
            </View>
        </View>
    )
}


export default Header;

const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        // height: SIZES.height * .1,
        backgroundColor: COLORS.white,
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageBox: {
        width: SIZES.width,
        height: SIZES.height * .12,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
    },

    image: {
        width: SIZES.width*1.25,
        height: SIZES.height * .15,
    },

    title: {
        fontFamily: FONTS.bold,
        // fontSize: 22,
        fontSize: SIZES.width * .056,
        color: COLORS.white,
        marginTop: -3,
    },

})