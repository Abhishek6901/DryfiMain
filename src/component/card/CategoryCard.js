import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../constants'

const CategoryCard = ({ category, source, onPress, marginLeft, }) => {
  // console.log("category caardasd : ", marginLeft)
  return (
    <TouchableOpacity style={[styles.card, { marginLeft: marginLeft }]}
      onPress={onPress}
    >
      <Image source={source} style={styles.image} resizeMode='contain' />
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>

  )
}

CategoryCard.defaultProps = {
  category: null,
  source: images.wash,
  marginLeft: null,
}

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: SIZES.width * .34,
    height: SIZES.width * .34,
    borderRadius: SIZES.width * .03,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    marginRight: SIZES.width * .05,
    elevation: 5,
    marginVertical: SIZES.height * .01,
  },

  image: {
    width: SIZES.width * .2,
    height: SIZES.width * .2,
    marginVertical: SIZES.height * .013,
  },

  category: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * .036,
    color: COLORS.primary,
    // color: COLORS.white,
    marginBottom: -4,
  },
})