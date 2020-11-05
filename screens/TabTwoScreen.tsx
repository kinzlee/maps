import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {useCountDispatch} from './TabOneScreen'

const Home  = ({navigation}:any) => {
  const dispatch = useCountDispatch()
  return (
    <View>
      <Button title="increment" onPress={() =>dispatch({type:'increment'})} />
      <Text>this is a count count system</Text>
    </View>
  )
}

export default Home;



































// import React, {useState, useEffect, useRef} from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Dimensions,
//   Platform,
//   PermissionsAndroid
// } from "react-native";
// import MapView, {
//   Marker,
//   MarkerAnimated,
//   AnimatedRegion,
//   Polyline,
//   PROVIDER_GOOGLE
// } from "react-native-maps";
// import * as Location from "expo-location";
// import useLocation from '../components/newLocation/useLocation';


// // const LATITUDE = 29.95539;
// // const LONGITUDE = 78.07513;
// const LATITUDE_DELTA = 0.0001;
// const LONGITUDE_DELTA = 0.0001;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;

// const AnimatedMarkers = () => {
//     const [state, setState] = useState({
//       latitude: 0,
//       longitude: 0,
//       routeCoordinates: [],
//       distanceTravelled: 0,
//       prevLatLng: {}
//     })
//     const [locationError, setLocationError] = useState<string | undefined>();
//         const marker = useRef(null);


//   useEffect(() => {
//     // const { coordinate } = state;

//    const  watchID = navigator.geolocation.watchPosition(
//       position => {
//         const { routeCoordinates, distanceTravelled, latitude, longitude } = state;

//         if (Platform.OS === "android") {
//           if (marker.current) {
//             marker.current.animateMarkerToCoordinate(
//               new AnimatedRegion({
//                 latitude,
//                 longitude,
//                 latitudeDelta: 0,
//                 longitudeDelta: 0
//       }),
//               500
//             );
//           }
//         } else {
//           coordinate.timing({latitude, longitude}).start();
//         }
//         // console.log({latitude, longitude}, '<<<>>>>>>>><<<<') 

//         setState({
//           ...state,
//           routeCoordinates: routeCoordinates.concat([{latitude, longitude}]),
//           prevLatLng: {latitude, longitude}
//         });
//       },
//       error => console.log(error),
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000,
//         distanceFilter: 10
//       }
//     );
//         return () => {
//     navigator.geolocation.clearWatch(watchID);
//     }
//   }, [])

//   useEffect(() => {
//     (async () => {
//     let { status } = await Location.requestPermissionsAsync()
//       if (status !== "granted") {
//         setLocationError("Permission to access location was denied");
//       }

//     await Location.watchPositionAsync({
//         accuracy: Location.Accuracy.High,
//         distanceInterval: 0,
//         timeInterval: 300
//       }, (location) => {
//         console.log(location, '........')
//           setState({
//             ...state,
//             latitude: location?.coords.latitude,
//             longitude:location?.coords.longitude,
//           })
//         });
//       })();
    
//     // console.log(locationUse, '"""""""""""""""""""""""');
    
//   }, [])

//   const getMapRegion = () => ({
//     latitude: state.latitude,
//     longitude: state.longitude,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA
//   });
//   console.log(state.routeCoordinates, '.........,.,.,.,.,.,.,.')

//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           provider={PROVIDER_GOOGLE}
//           showUserLocation
//           followUserLocation
//           loadingEnabled
//           region={getMapRegion()}
//         >
//           <Polyline coordinates={state.routeCoordinates} strokeWidth={3} strokeColor={'blue'} />
//           <MarkerAnimated
//             coordinate={getMapRegion()} 
//             ref={marker => {
//               marker = marker;
//             }}
            
//           />
//         </MapView>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={[styles.bubble, styles.button]}>
//             <Text style={styles.bottomBarContent}>
//               {parseFloat(state.distanceTravelled).toFixed(2)} km
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject
//   },
//   bubble: {
//     flex: 1,
//     backgroundColor: "rgba(255,255,255,0.7)",
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20
//   },
//   latlng: {
//     width: 200,
//     alignItems: "stretch"
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: "center",
//     marginHorizontal: 10
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginVertical: 20,
//     backgroundColor: "transparent"
//   }
// });

// export default AnimatedMarkers;
