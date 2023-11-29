// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/
// Import React
import React, { useRef } from 'react';
// Import required components
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// Import Map and Marker
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';

const apiKey = 'AIzaSyAatarUnfCi0opdn9JPy6GNuwf0q3r6RBg'

const GooglePlacesInput = () => {
  const placesRef = useRef();
  console.log('input text : ', placesRef.current?.getAddressText());

  const getAddress = () => {
    console.log(placesRef.current?.getAddressText());
  };
  return (
    // <GooglePlacesAutocomplete
    //   placeholder='Search'
    //   onPress={(data, details = null) => {
    //     // 'details' is provided when fetchDetails = true
    //     console.log(data, details);
    //   }}
    //   query={{ 
    //     key: 'AIzaSyAatarUnfCi0opdn9JPy6GNuwf0q3r6RBg',
    //     language: 'en',
    //   }}
    // />
    // <GooglePlacesAutocomplete
    //   placeholder='Enter Location'
    //   minLength={2}
    //   autoFocus={false}
    //   returnKeyType={'default'}
    //   onPress={(data, details = null) => {
    //     // 'details' is provided when fetchDetails = true
    //     console.log(data, details);
    //   }}
    //   fetchDetails={true}
    //   styles={{
    //     textInputContainer: {
    //       width: 300,
    //       backgroundColor: 'grey',
    //     },
    //     textInput: {
    //       height: 38,
    //       color: '#5d5d5d',
    //       fontSize: 16,
    //     },
    //     predefinedPlacesDescription: {
    //       color: '#1faadb',
    //     },
    //   }}
    // />
    <GooglePlacesAutocomplete
      placeholder="Type a place"
      onPress={(data, details = null) => console.log('data : ',data, details)}
      query={{ key: apiKey, components: 'country:us', }}
      fetchDetails={true}
      onFail={error => console.log('error: ', error)}
      onNotFound={() => console.log('no results')}
      ref={placesRef}
    />
  );
};


const Location = ({ currentLatLong }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
       
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider='google'
          loadingEnabled
          zoomEnabled
          zoomTapEnabled
          showsIndoors={false}
          showsTraffic={false}
          showsBuildings={false} 
          showsScale={true}
          // onMarkerDrag={(x) => console.log(x)}
          // customMapStyle={mapStyle}
          >
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            // title={'Test Marker'}
            // description={'This is a description of the marker'}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};      //currentLatLong

const mapStateToProps = (state) => ({
  currentLatLong: state.home.currentLatLong
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Location)

const mapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});








