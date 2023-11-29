import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    // ========== header =================
    header_bg: {
        width: SIZES.width,
        // height: SIZES.height * .4,
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
    },

    header_row: {
        width: SIZES.width,
        height: SIZES.height * .14,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * .05,
        paddingTop: SIZES.height * .01,
        // borderWidth: 1,
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

    // ============= profile ==================
    profile_box: {
        width: SIZES.width * .9,
        // alignItems: 'center',
        marginVertical: SIZES.height * .01,
    },

    image_box: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        borderRadius: SIZES.width * .12,
        overflow: 'hidden',
        marginRight: SIZES.width * .03,
        backgroundColor: COLORS.light,
    },

    profile: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        borderRadius: SIZES.width * .12,
        marginRight: SIZES.width * .03,
    },

    user_box: {
        width: SIZES.width * .9,
        paddingHorizontal: SIZES.width * .05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.width * .03,
        marginBottom: SIZES.height * .02,
        paddingVertical: SIZES.height * .015,
    },

    user_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    user_name: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .045,
        marginBottom: -5,
        color: COLORS.black,
    },
    subtitle: {
        fontFamily: FONTS.regular,
        color: COLORS.black,
        fontSize: SIZES.width * .034,
        marginTop: -2,
    },
    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .031,
        marginBottom: -5,
        color: COLORS.white,
    },

    call_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        borderColor: COLORS.secondary,
        borderRadius: SIZES.height * .05,
    },

    order_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        borderColor: COLORS.secondary,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.height * .05,
    },

    box: {
        width: SIZES.width * .9,
        paddingHorizontal: SIZES.width * .05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.light1,
        borderRadius: SIZES.width * .03,
        paddingVertical: SIZES.height * .015,
    },
    deliver: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .045,
        marginBottom: -5,
        color: COLORS.secondary,
    },
    // ============== button ================
    btn_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: COLORS.light,
        borderRadius: SIZES.height * .06,
        padding: SIZES.width * .01,
        marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .03,
        // marginVertical: SIZES.height * .02,
        // marginBottom: SIZES.height * .05,
    },

    btn: {
        width: SIZES.width * .43,
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.height * .06,
    },

    btn_text: {
        fontFamily: FONTS.medium,
        color: COLORS.white,
        fontSize: SIZES.width * .041,
        marginBottom: -5,
    },

    //   ================= order container ===========
    order_box: {
        width: SIZES.width * .9,
        backgroundColor: "#F1F1F1",
        marginVertical: SIZES.height * .02,
        borderRadius: SIZES.width * .04,
        alignSelf: 'center',
        paddingBottom: SIZES.height * .02,
    },

    order_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: COLORS.light,
        paddingVertical: SIZES.height * .01,
        paddingHorizontal: SIZES.width * .03,
        marginBottom: SIZES.height * .01,
    },
    order_id: {
        fontFamily: FONTS.semiBold,
        color: COLORS.secondary,
        fontSize: SIZES.width * .042,
        marginTop: SIZES.height * .01,
        marginLeft: SIZES.width * .03,
    },
    key: {
        fontFamily: FONTS.medium,
        color: COLORS.black,
        fontSize: SIZES.width * .038,
        marginBottom: -5,
    },
    price: {
        fontFamily: FONTS.semiBold,
        color: COLORS.black,
        fontSize: SIZES.width * .036,
        marginBottom: -5,
    },
    value: {
        width: SIZES.width * .4,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        fontSize: SIZES.width * .034,
        marginBottom: -4,
        textAlign: 'right',
    },
    pick_btn: {
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },

    pick_btn_text: {
        fontFamily: FONTS.semiBold,
        color: COLORS.secondary,
        fontSize: SIZES.width * .042,
        marginBottom: -5,
    },
    btn1: {
        // width: SIZES.width * .4,
        alignSelf: 'center',
        marginBottom: SIZES.height * .02,
    },
   


    row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        // borderTopWidth: 1,
        // borderColor: COLORS.gray20
        // marginBottom: SIZES.height * .01,
    },

    order_row1: {
        width: SIZES.width * .8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SIZES.height * .01,
        paddingHorizontal: SIZES.width * .03,
        // marginBottom: SIZES.height * .01,
    },
    address: {
        width: SIZES.width * .8,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        fontSize: SIZES.width * .034,
        marginBottom: -4,
        alignSelf: 'center',
    },
    head: {
        fontFamily: FONTS.semiBold,
        color: COLORS.secondary,
        fontSize: SIZES.width * .038,
        marginTop: SIZES.height * .01,
        marginLeft: SIZES.width * .03,
    },
    row_text: {
        fontFamily: FONTS.regular,
        color: COLORS.black,
        fontSize: SIZES.width * .036,
        marginBottom: -5,
    },
    row_title: {
        fontFamily: FONTS.medium,
        color: COLORS.black,
        fontSize: SIZES.width * .036,
        marginBottom: -5,
    },
})