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
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.width * .05,
    paddingTop: SIZES.height * .02,
    // borderWidth: 1,
},

notification_btn: {
    width: SIZES.width * .1,
    height: SIZES.width * .1,
    borderRadius: SIZES.width * .05,
    backgroundColor: COLORS.white,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: "center",
},

// ============= profile ==================
profile_box: {
    width: SIZES.width * .9,
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
},

user_name: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .056,
    marginBottom: -5,
    color: COLORS.white,
},

text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * .031,
    marginBottom: -5,
    color: COLORS.white,
},
title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .05,
    marginBottom: -5,
    color: COLORS.black,
    marginLeft: SIZES.width * .03,
    marginTop: SIZES.height * .02,
    // marginBottom: SIZES.height * .003,
},

// ========= banner =============
banner: {
    width: SIZES.width * .94,
    height: SIZES.height * .24,
    alignSelf: 'center',
    marginBottom: SIZES.height * .02,
},

// ============== card =============
card_row: {
    width: SIZES.width * .94,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignSelf: 'center',
},
card: {
    width: SIZES.width * .45,
    height: SIZES.height * .2,
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: SIZES.width * .02,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.height * .025,
},

card_image: {
    width: SIZES.width * .15,
    height: SIZES.width * .15,
    // borderWidth: 1,
    marginBottom: SIZES.height * .01,
},

card_total: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .045,
    marginBottom: -5,
    color: COLORS.white,
},
card_title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * .05,
    marginBottom: -5,
    color: COLORS.white,
},
})