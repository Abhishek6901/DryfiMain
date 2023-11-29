import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
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
  readyHeading: {
    color: '#B70689',
    fontSize: 22,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginTop: 10,
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
  locateBtn: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  locateTxt: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginHorizontal: 5,
  },
  locateme: {
    height: SIZES.height * 0.03,
    width: SIZES.width * 0.05,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
});
