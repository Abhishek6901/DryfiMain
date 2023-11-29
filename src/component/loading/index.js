// import { ActivityIndicator, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { COLORS, FONTS, SIZES, images } from '../../constants';
// import Modal from 'react-native-modal'


// const Loading = () => {
//   return (
//     <View style={styles.container}>
//        <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />
//       {/* <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" /> */}
//       {/* <Text style={styles.title}>
//         Sorry for the interruption
//       </Text> */}
//       <ActivityIndicator color={COLORS.black} size={40} style={styles.loading} />
//       <Text style={styles.text}>Loading...</Text>
//     </View>
//   )
// }

// export default Loading;

// const styles = StyleSheet.create({

//   modal: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   loading_box: {
//     width: SIZES.width * .3,
//     height: SIZES.width * .3,
//     borderRadius: SIZES.width * .02,
//     justifyContent: "center",
//     alignItems: "center",
//     overflow: 'hidden',
//     backgroundColor: COLORS.white,
//   },

//   loading_image: {
//     width: SIZES.width * .08,
//     height: SIZES.width * .08,
//     // width: SIZES.width * .8,
//     // height: SIZES.width * .8,
//   },

//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: COLORS.white
//   },

//   title: {
//     fontFamily: FONTS.bold,
//     fontSize: 20,
//     color: COLORS.black,
//     marginBottom: 30,
//   },

//   text: {
//     fontFamily: FONTS.regular,
//     fontSize: 14,
//     color: COLORS.black,
//   },

//   loading: {
//     marginBottom: 10,
//   },

// })

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';

const Loading = ({loading}) => {
 
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => { console.log('close modal') }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size={30}
            animating={loading} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loading;


