import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

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
    height: SIZES.height * 0.14,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.height * 0.01,
    // borderWidth: 1,
  },

  back_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.05,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * 0.03,
  },

  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.05,
    marginBottom: -4,
    color: COLORS.white,
  },

  // ============= profile ==================
  profile_box: {
    width: SIZES.width * 0.9,
    marginVertical: SIZES.height * 0.01,
  },

  image_box: {
    width: SIZES.width * 0.12,
    height: SIZES.height * 0.06,
    borderRadius: SIZES.width * 0.12,
    overflow: 'hidden',
    marginRight: SIZES.width * 0.03,
    backgroundColor: COLORS.light,
  },

  profile: {
    width: SIZES.width * 0.12,
    height: SIZES.height * 0.06,
    borderRadius: SIZES.width * 0.12,
  },

  user_name: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.056,
    marginBottom: -5,
    color: COLORS.white,
  },

  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.031,
    marginBottom: -5,
    color: COLORS.white,
  },

  // ============== button ================
  btn_row: {
    width: SIZES.width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.light,
    borderRadius: SIZES.height * 0.06,
    padding: SIZES.width * 0.01,
    marginTop: SIZES.height * 0.01,
    marginBottom: SIZES.height * 0.03,
  },

  btn: {
    width: SIZES.width * 0.43,
    height: SIZES.height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.height * 0.06,
  },

  btn_text: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.width * 0.041,
    marginBottom: -5,
  },

  //   ================= order container ===========
  order_box: {
    width: SIZES.width * 0.9,
    backgroundColor: '#FBCFFF80',
    // marginTop: SIZES.height * 0.02,
    // borderRadius: SIZES.width * 0.04,
    alignSelf: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  user_row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: SIZES.height * 0.02,
    // backgroundColor: '#B70689',
    // paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  user_pic: {
    width: SIZES.width * 0.12,
    height: SIZES.width * 0.12,
    borderRadius: SIZES.width * 0.1,
    marginHorizontal: SIZES.width * 0.03,
  },
  cus_name: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.width * 0.05,
    marginBottom: -5,
    fontWeight: '600',
  },
  success_cus_name: {
    fontFamily: FONTS.medium,
    color: COLORS.primary,
    fontSize: SIZES.width * 0.05,
    marginBottom: -5,
    fontWeight: '600',
  },

  subtitle: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.width * 0.034,
    marginTop: -2,
  },
  order_row: {
    width: SIZES.width * 0.84,
    flexDirection: 'row',
    // alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.height * 0.01,
  },
  order_id: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: SIZES.width * 0.042,
    marginTop: SIZES.height * 0.02,
    marginBottom: SIZES.height * 0.01,
    marginLeft: SIZES.width * 0.03,
  },
  key: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: SIZES.width * 0.038,
    marginBottom: -5,
  },
  price: {
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
    fontSize: SIZES.width * 0.036,
    marginBottom: -5,
  },
  value: {
    width: SIZES.width * 0.4,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    fontSize: SIZES.width * 0.034,
    marginBottom: -4,
  },
  pick_btn: {
    height: SIZES.height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },

  pick_btn_text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.secondary,
    fontSize: SIZES.width * 0.042,
    marginBottom: -5,
  },
  btn1: {
    width: SIZES.width * 0.7,
    alignSelf: 'center',
    marginBottom: SIZES.height * 0.02,
  },
  btn1_text: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.width * 0.038,
    marginBottom: -4,
  },
  view_btn: {
    width: SIZES.width * 0.7,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1.2,
    borderColor: COLORS.secondary,
    marginVertical: SIZES.height * 0.02,
  },
  view_text: {
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
    fontSize: SIZES.width * 0.038,
    marginBottom: -4,
  },

  // modal
  modalbox: {
    // borderWidth: 2,
    // borderColor: COLORS.primary,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  space_row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: SIZES.height * 0.02,
  },
  modal_btn: {
    width: SIZES.width * 0.9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: SIZES.height * 0.02,
  },
  cancel_btn: {
    position: 'absolute',
    top: SIZES.height * -0.018,
    right: SIZES.width * -0.025,
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderRadius: SIZES.width * 0.06,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.primary,
  },
  subText: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.primary,
    width: 150,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  horizontalLine: {
    borderBottomColor: '#B70689',
    borderBottomWidth: 0.5,
  },
  horizontalLineEnd: {
    borderBottomColor: '#B70689',
    borderBottomWidth: 0.5,
    marginBottom: 20,
  },
  orderCompleted: {
    fontSize: 22,
    color: '#24A271',
    fontWeight: '600',
    marginVertical: 15,
    textAlign: 'center',
  },
  orderId: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  topBtnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    backgroundColor: COLORS.white,
    width: '100%',
    paddingHorizontal: 20,
  },
  topBtns: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    border: 2,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginTop: 20,
    marginBottom: 20,
  },
  activeBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    border: 2,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginTop: 20,
    marginBottom: 20,
  },
  activeBtnText: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '600',
  },

  btnText: {
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: '600',
  },
  totalText: {
    fontWeight: '700',
    fontSize: 18,
    color: COLORS.primary,
  },
});
