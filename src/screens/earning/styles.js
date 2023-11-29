import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .048,
        marginBottom: -5,
        color: COLORS.black,
        marginTop: SIZES.height * .02,
    },


    //  ================  notification card =====================

    box: {
        width: SIZES.width,
        // height: SIZES.height * .07,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        borderBottomWidth: 1.3,
        borderColor: COLORS.light,
        paddingHorizontal: SIZES.width * .03,
        paddingVertical: SIZES.height * .015,
        // marginBottom: SIZES.height * .025,
    },


    image: {
        width: SIZES.width * .12,
        height: SIZES.width * .12,
        borderRadius: SIZES.width * .1,
        marginRight: SIZES.width * .03,
        // borderWidth: 1,
    },

    box_row: {
        flexDirection: 'row',
        // alignItems: 'center',
    },

    time_row: {
        width: SIZES.width * .4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    order_id: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .041,
        marginBottom: -5,
        color: COLORS.black,
    },
    amt: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .042,
        marginBottom: -5,
        color: COLORS.black,
    },
    earning: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .04,
        marginBottom: -4,
        color: COLORS.primary,
    },
    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .034,
        marginBottom: -4,
        color: COLORS.black,
    },

})