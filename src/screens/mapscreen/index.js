import {
  ImageBackground,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icons from '../../component/Icons';
import styles from './styles';
import {COLORS, icons, images} from '../../constants';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const MapScreen = ({navigation, route}) => {
  const mapRef = useRef(null);
  const {userCoords} = route.params;
  const [coordinates, setCoordinates] = useState(userCoords);

  const recenterToUserLocation = () => {
    mapRef.current.animateToRegion({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      latitudeDelta: 0.0006,
      longitudeDelta: 0.0023,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.header_bg}>
        <ImageBackground source={images.header_bg} style={styles.header_row}>
          <TouchableOpacity
            style={styles.back_btn}
            onPress={() => navigation?.goBack()}>
            <Icons name={'back'} size={22} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.title}>User Location</Text>
        </ImageBackground>
      </View>
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          onRegionChangeComplete={data => {
            console.log('Data', data);
          }}
          zoomTapEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          region={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0006,
            longitudeDelta: 0.0023,
          }}>
          <Marker
            coordinate={coordinates}
            title={'User is Here'}
            description={'This is user location.'}
          />
        </MapView>
        <TouchableOpacity
          onPress={recenterToUserLocation}
          activeOpacity={0.7}
          style={styles.locateBtn}>
          <Image source={icons.locateme} style={styles.locateme} />
          <Text style={styles.locateTxt}>LOCATE USER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
