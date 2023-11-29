import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";



export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLORS.white,
    }, 

    center: {
        alignItems: 'center',
    },

    title_box: {
        width: SIZES.width * .9,
        marginBottom: SIZES.height * .025,
    },

    title: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.width * .06,
        color: COLORS.black,
        marginBottom: -4,
    },

    justify_between: {
        // width: SIZES.width * .9,
        height: SIZES.height * .8,
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingVertical: SIZES.height * .03,
        // borderWidth: 1,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .038,
        color: COLORS.black,
        marginBottom: -4,
    },

    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
       justifyContent: 'space-between',
        width: SIZES.width * .9,
    },
    
})