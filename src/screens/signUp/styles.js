import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS } from '../../constants'

export default StyleSheet.create({
    signup_btn: {
        // borderWidth: 1,
        alignItems: "flex-end",
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black1,
    },

    signup_text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -5,
        color: COLORS.black1,
    },

})
