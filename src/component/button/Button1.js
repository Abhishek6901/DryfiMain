import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, } from '../../constants'


const Button1 = ({ backgroundColor, textStyle, loading, disabled, style, children, textColor, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5}
      style={{ ...styles.btn, ...style,backgroundColor: backgroundColor}}
      onPress={onPress}
      disabled={disabled}
    >
      {loading &&
        <ActivityIndicator color={COLORS.white} size={25} style={{marginRight: SIZES.width * .03}} />
      }
      <Text style={{ ...styles.btn_text, ...textStyle, color: textColor }}>{children}</Text>
    </TouchableOpacity>
  )
}

Button1.defaultProps = {
  backgroundColor: COLORS.buttonColor,
  style: null,
  textColor: COLORS.white,
  textStyle: null,
  children: null,
  onPress: null,
  disabled: false,
  loading: false,
}

export default Button1;

const styles = StyleSheet.create({
  btn: {
    width: SIZES.width * .9,
    height: SIZES.height * .065,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.buttonColor,
    borderRadius: SIZES.width * .024,
  },

  btn_text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    fontSize: SIZES.width * .041,
    marginBottom: -5,
  },
})