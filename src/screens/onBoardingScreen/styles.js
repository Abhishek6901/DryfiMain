import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from '../../constants'



export default StyleSheet.create({

    slide_main: {
        width: SIZES.width,
        alignItems: 'center',
    },

    onBoarding_Img: {
        width: SIZES.width,
        height: SIZES.height * .4,
    },

    box: {
        width: SIZES.width,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderTopLeftRadius: SIZES.width * .09,
        borderTopRightRadius: SIZES.width * .09,
        marginTop: SIZES.height * .05,
    },

    text_box: {
        width: SIZES.width * .9,
        alignItems: 'center',
    },

    title: {
        color: COLORS.black,
        fontSize: SIZES.width * .066,
        marginTop: SIZES.height * .03,
        textAlign: 'center',
        fontFamily: FONTS.bold,
        marginBottom: -6,
    },

    subtitle: {
        color: COLORS.black,
        fontSize: SIZES.width * .044,
        textAlign: 'center',
        fontFamily: FONTS.regular,
        marginBottom: -4,
        marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .03,
    },

    footer_main: {
        height: SIZES.height * .18,
        // borderWidth: 1,
        justifyContent: 'space-between',
        // paddingHorizontal: SIZES.width * .02,
        backgroundColor: COLORS.white,
    },

    indicator_container: {
        // marginTop: SIZES.height * .03,
        // marginBottom: SIZES.height * .03,
    },

    Indicator_main_view: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    indicator: {
        height: SIZES.height * .012,
        width: SIZES.width * .024,
        borderRadius: SIZES.width * .03,
        backgroundColor: COLORS.gray40,
        marginHorizontal: 5,
    },

    btn_row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: SIZES.width * .9,
        // marginBottom: SIZES.height * .03,
    },

    next_btn: {
        width: SIZES.width * .3,
        height: SIZES.height * .056,
        borderRadius: SIZES.height * .03,
        backgroundColor: COLORS.buttonColor,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
    },

    btn_text: {
        // fontSize: 15,
        fontSize: SIZES.width * .041,
        marginBottom: -3,
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
    },

    btn: {
        width: SIZES.width * .7,
        height: SIZES.height * .056,
        borderRadius: SIZES.height * .03,
        backgroundColor: COLORS.buttonColor,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Button_parent_view: {
        marginBottom: SIZES.height * .04,
        alignItems: 'center'
    },

})