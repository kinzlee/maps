import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Slide from "../components/fluidTestComponent/Slide";

const { width } = Dimensions.get("window");

const slides = [
  {
    color: "#3984FF",
    picture: require("../assets/images/tstImg.png"),
    aspectRatio: 439.75 / 470.5,
  },
  {
    color: "#39ffb4",
    picture: require("../assets/images/tstImg.png"),
    aspectRatio: 400.5 / 429.5,
  },
  {
    color: "#ffb439",
    picture: require("../assets/images/tstImg.png"),
    aspectRatio: 391.25 / 520,
  },
];
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Fluid = () => {
  const x = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  return (
    <View style={styles.root}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {slides.map((slide, index) => {
          const isFirst = index === 0;
          const isLast = index === slides.length - 1;
          return (
            <View key={index} style={styles.container}>
              <Slide
                x={x}
                index={index}
                aspectRatio={slide.aspectRatio}
                picture={slide.picture}
                colors={[
                  isFirst ? slide.color : slides[index - 1].color,
                  slide.color,
                  isLast ? slide.color : slides[index + 1].color,
                ]}
              />
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default About













// const funcPrime  = (num:any, division = 2):any => {
//       if(num < 2 || (num > 2 && num % division === 0)) {
//         return false;
//       }
//       if(division <= Math.sqrt(num)) {
//         return funcPrime(num, division + 1)
//       }
//       return true
//   }

//   console.log(funcPrime(9), 'prrrrriiiiimeee');



// const fib = (n:number):any => {
//   if(n <= 1) {
//     return n;
//   }
//   return fib(n-2) + fib(n-1);
// }

// console.log(fib(8), 'fibonaaa')

// const arrayAdd = (arr: any) => {
//   const numbers = arr;
//   const add = (a:any, b:any) => {
//     return a + b;
//   }
//   const sum = numbers.reduce(add);
//   return sum
// }

// console.log(arrayAdd([3,3,37,8]), 'arraararaa');



// const isEven = (v:any) => {
//   if(v === 0) return true;
//   return isOdd(Math.abs(v) -1);
// }

// const isOdd = (v:any):any => {
//   if(v === 0) return false;
//   return isEven(Math.abs(v) -1);
// }

// console.log(isEven(9), 'even nott', isOdd(9), 'should be odd')



// const compare = (arrOne:any, arrTwo:any) => {
//     const {A, B} = arrOne.reduce((acc:any, cur:any) => {
//       const {counter} = acc;

//       if(arrOne[counter] > arrTwo[counter]) {
//         acc.A++
//       } else if(arrTwo[counter] > arrOne[counter]) {
//         acc.B++
//       }

//       acc.counter++;
//       return acc

//     },{A: 0, B:0, counter: 0})
//     return [A, B]
// }

// const compareTwo = (arrOne:any, arrTwo:any) => {
//   let A = 0, B = 0;
//   const result:any = [];
//   for ( let counter=0; counter < arrOne.length; counter++) {
//       if(arrOne[counter] > arrTwo[counter]) {
//          A++;
//       } else if(arrTwo[counter] > arrOne[counter]) {
//         B++;
//       }

//     // return {arrOne, arrTwo}
//   }
//   return [A,B]
// }

// const convert = (arrConv:any) => {
// const result = arrConv.reduce((acc:any, cur:any) => {
//       const val =  cur.first.toUpperCase();
//       acc.push(val);
//       return acc;
// },[])
//       return result;
// };


// console.log(convert([{first:'mike'}, {first:'jimmy'}, {first:'steve'}]), '.......')
// console.log(compareTwo([1,2,3], [3,3,4]), 'conparing arraysss')







// const arrAddition = (x) => {
//   let total = 0;
//   for(let i in x) {
//     total += x[i]
//   }
//   return total;
// }


// const tstArr = [4, 4, 5, 6, 7];

// console.log(arrAddition(tstArr), '//////////ppppppp');


// const matrix = [[3],[11, 2, 4], [4, 5, 6], [10, 8, -12]];

// const dimensionDifferentiation = (mtrx) => {
//   let dimensionOne = 0, dimensionTwo = 0;
//   for(let row = 0; row < mtrx.length; row++) {
//     if(mtrx[row] <= 1) {
//       return;
//     }
//     dimensionOne += mtrx[row][row];
//     dimensionTwo += mtrx[row][mtrx.length - row - 1]
//   }

//   return dimensionTwo - dimensionOne;
// }

// console.log(dimensionDifferentiation(matrix), 'matrix');








// const flattenArray = (data: any) => {
//   const initialValue:[] = [];
//   const reducerFunc = () => {
//     return data.reduce((total:any, value:any) => {
//       return total.concat(Array.isArray(value) ? flattenArray(value) : value)
//     }, initialValue)
//   }

//   return reducerFunc;
// }









// type Action = {type: 'increment'} | {type: 'decrement'}
// type Dispatch = (action:Action) => void;
// type State = {count: number}
// type CountProviderProps = {children:React.ReactNode}

// const CountStateContext = createContext<State | undefined>(undefined);
// const CountDispatchContext = createContext<Dispatch | undefined>(undefined);

// const countReducer = (state:State, action:Action) => {
//   switch (action.type) {
//     case 'increment': {
//       return {count: state.count + 1}
//     } 
//     case 'decrement': {
//       return {count: state.count -1}
//     }
//     default : {
//       throw new Error(`unhandled action rejection: ${action}`)
//     }
//   }
// }

// export const CountProvider = ({children}: CountProviderProps) => {
//     const [state, dispatch] = useReducer(countReducer, {count: 0});
//     return (
//       <CountStateContext.Provider value={state}>
//         <CountDispatchContext.Provider value={dispatch} >
//           {children}
//         </CountDispatchContext.Provider>
//       </CountStateContext.Provider>
//     )
// }

// export const useCountState = () => {
//   const context = useContext(CountStateContext);
//   if(context == undefined) {
//     throw Error('useCount must be used inside a CountProvider')
//   }
//   return context;
// }

// export const useCountDispatch = () => {
//   const context =  useContext(CountDispatchContext);
//   if(context == undefined) {
//     throw Error('useCountDispatch must be used inside a CounterProvider')
//   }
//   return context;
// }





























// import React, { Component } from "react";
// import {
//   VictoryLine,
//   VictoryChart,
//   VictoryVoronoiContainer,
//   VictoryTooltip,
//   VictoryAxis
// } from "victory-native";
// import {ScrollView, View, Dimensions} from 'react-native';

// export default class Tacos extends Component {
//   constructor() {
//     super();
//     this.state = {  
//       data: [
//         { x: "Sun", y: 3, label: "here" },
//         { x: "Mon", y: 6, label: "there" },
//         { x: "Tue", y: 2, label: "where" },
//         {
//           x: "Wed",
//           y: 6,
//           label: "you they fear"
//         },
//         { x: "Thur", y: 4, label: "sheyrere" },
//         { x: "Fri", y: 5, label: "u dey hear" },
//         { x: "Sat", y: 1, label: "i dey here" },
//         { x: "Sun", y: 7, label: "mayaree" }
//       ]
//     };
//   }


//   render() {
//     return (
//       <View style={{flex:0.5, justifyContent:'center', alignItems:'center', height:'100%', width:'100%', padding:20}}>
//       <ScrollView>
//         <VictoryChart
//         height={Dimensions.get("window").height * 0.6}
//         width={Dimensions.get("window").width}
//           containerComponent={
//             <VictoryVoronoiContainer label={d => `${d.label}`} mouseFollowTooltips voronoiDimension="x" />
//           }
//         >
//           <VictoryAxis
//            />
//           <VictoryLine
//           // containerComponent={
//           //   // <VictoryVoronoiContainer label={d => `${d.label}`} />
//           // }
//         //     labelComponent={<VictoryTooltip
//         //     renderInPortal={false}
//         //       cornerRadius={0}
//         //       pointerWidth={1}
//         //       pointerLength={35}
//         //       flyoutStyle={{
//         //   stroke: ({ datum }) => datum.x === 10
//         //     ? "tomato"
//         //     : "black"
//         // }}
//         //      />}
//             data={this.state.data}
//             style={{
//               data: {
//                 stroke: "#02B875"
//               }
//             }}
//           />
//         </VictoryChart>
//         </ScrollView>
//         </View>
//     );
//   }
// }




















// import React, {useState, useEffect, useRef} from 'react';
// import { StyleSheet, View, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import {Icon} from 'react-native-elements'
// import geolib, { getDistance, findNearest, orderByDistance } from 'geolib';
// import * as Location from 'expo-location';
// import RBSheet from "react-native-raw-bottom-sheet";
// import Constants from 'expo-constants'
// import ENV from '../env';
// import MapInput from '../components/MapInput';

// const { width, height } = Dimensions.get('window');

// const ASPECT_RATIO = width / height;
// const SPACE = 0.01;
//  const LATITUDE = 37.5651703;
// const LONGITUDE = -122.3278557;
// const LATITUDE_DELTA = 0.1;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// // const markerIDs = ['Marker1', 'Marker2', 'Marker3'];

// const CustomMarkers = () => {
//  const refRBSheet = useRef();
//   const [locationError, setLocationError] = useState('');
//   const [state, setState] = useState({
//     latitude: LATITUDE,
//     longitude: LONGITUDE,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA,
//     markers: [
//         {
//           id: 'marker1',
//           coordinates: {latitude: 0,
//           longitude: 0,}
//         },
//         {
//           id: 'marker2',
//           coordinates: {latitude:0,
//           longitude:0}
//         },
//         {
//           id: 'marker3',
//           coordinates: {latitude:0,
//           longitude:0}
//         },
//         {
//           id: 'marker4',
//         coordinates: {latitude:0,
//           longitude:0}
//         },
//         {
//           id: 'marker5',
//         coordinates: {latitude:0,          longitude:0   }  }
//       ], 
//       address: ''
//   });

//   const convertArrayToObject = (array, key) => {
//   const initialValue = {};
//   if(!array) return;
//   return array.reduce((obj, item) => {
//     return {
//       ...obj,
//       [item[key]]: item,
//     };
//   }, initialValue);
// };

// const firstLocationNewMarks = convertArrayToObject(state.markers, 'id')
  
  

// useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== "granted") {
//         setLocationError("Permission to access location was denied");
//       }

//       await Location.watchPositionAsync({
//         accuracy: Location.Accuracy.High
//       }, (location) => {
//         console.log(location, '.........')
//           setState({
//             ...state,
//             latitude: location?.coords.latitude,
//             longitude:location?.coords.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//             markers: [
//         {
//           id: 'marker1',
//           coordinates: {latitude: LATITUDE + SPACE * 1.2,
//           longitude: LONGITUDE + SPACE * 1.2,}
//         },
//         {
//           id: 'marker2',
//           coordinates: {latitude: LATITUDE + SPACE * 1.5,
//           longitude: LONGITUDE + SPACE * 1.5,}
//         },
//         {
//           id: 'marker3',
//           coordinates: {latitude: LATITUDE + SPACE * 1.8,
//           longitude: LONGITUDE + SPACE * 1.8}
//         },
//         {
//           id: 'marker4',
//         coordinates: {latitude: LATITUDE - SPACE * 2.6,
//           longitude: LONGITUDE - SPACE * 2.6}
//         },
//         {
//           id: 'marker5',
//         coordinates: {latitude: LATITUDE - SPACE * 3,
//           longitude: LONGITUDE - SPACE * 3}
//         },
//       ]
//           })
//         });
//       })();
    
//     // console.log(locationUse, '"""""""""""""""""""""""');
    
//   }, [])

//   const toggleView = () => {
//     return true;
//   }

  


// // const nearestDist = findNearest({latitude:state.latitude, longitude: state.longitude}, 
// // [{latitude: firstLocationNewMarks.marker3.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker3.coordinates.longitude},
// //   {latitude: firstLocationNewMarks.marker4.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker4.coordinates.longitude},
// //   {latitude: firstLocationNewMarks.marker5.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker5.coordinates.longitude},
// //   {latitude: firstLocationNewMarks.marker2.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker2.coordinates.longitude},
// //   {latitude: firstLocationNewMarks.marker1.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker1.coordinates.longitude}
// //   ])


// // const orderbyDist = orderByDistance({latitude: state.latitude, longitude: state.longitude}, [
// //   {latitude: firstLocationNewMarks.marker5.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker5.coordinates.longitude},
// //   {latitude: firstLocationNewMarks.marker4.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker4.coordinates.longitude},
// //   {latitude: firstLocationNewMarks.marker3.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker3.coordinates.longitude},
// //   {latitude: firstLocationNewMarks.marker2.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker2.coordinates.longitude},
// //   {latitude: firstLocationNewMarks.marker1.coordinates.latitude, 
// //   longitude: firstLocationNewMarks.marker1.coordinates.longitude}
// // ])


// // const fnGetDist = (coord) => {
// //   const  distance = getDistance({latitude:state.latitude, longitude: state.longitude},
// //    {latitude: coord.latitude, longitude: coord.longitude});
// //   return [[coord.latitude, coord.longitude],distance / 1000]
// // } 

// //   const newDist = orderbyDist.map(fnGetDist)



// // console.log(newDist, '000000000000')
// //       console.log(nearestDist, '+++++++++++++')
// //       console.log(orderbyDist, '----------')


//     // console.log(firstLocationNewMarks.marker1.coordinates)

//   // const firstLocationMeterDistance = getDistance({latitude:state.latitude, longitude: state.longitude}, 
//   // {latitude: nearestDist.latitude, 
//   // longitude: nearestDist.longitude})

//   // const convertOne = firstLocationMeterDistance / 1000

//   // console.log(convertOne +'km')

  


//   return (
//     <View style={styles.container}>
//     <MapView
//       style={styles.map}
//       region={state}
//       onRegionChange={region => setState(region)}
//     >
//      {state.markers && state.markers.map((marker, index) => (
//     <Marker
//       key={index}
//       coordinate={marker.coordinates} 
//       title={marker.title}
//       description={marker.description}
//     />
//      ))}
//      <Marker coordinate={state} />
//     </MapView>

//     <View>
//     <View>
//         <MapInput/>
//     </View>
//     <View style={styles.buttonContainer}>
     
//       {/* { 
//       <> 
//       <View style={styles.dataContaner}>
//         <Text>{'The closest tracktor to you is ' + convertOne+'km from your location'}</Text>
//         </View>
//         <View style={styles.dataContaner}>
//         <Text>{newDist}</Text>
//         </View>
//         </>
//         } */}
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <TouchableOpacity
//       style={[styles.bubble, styles.button]}
//       onPress={()=>refRBSheet.current.Open}
//      >
//        <Text>Get Tractors Closest to you</Text>
//      </TouchableOpacity>
//      </View>
//      </View>
//         <RBSheet
//           ref={refRBSheet}
//           height={300}
//           openDuration={250}
//           customStyles={{
//             container: {  
//               justifyContent: "center",
//               alignItems: "center"
//             }
//           }}
//         >
//           <View><TouchableOpacity onPress={() => [RBSheet + index].close()}><Text>close</Text></TouchableOpacity></View>
//         </RBSheet>
//       </View>
    

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//    container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   search: {
//       flex: 1,
//     padding: 10,
//     paddingTop: Constants.statusBarHeight + 10,
//     backgroundColor: '#ecf0f1',
//   },
//   bubble: {
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20,
//   },
//   latlng: {
//     width: 200,
//     alignItems: 'stretch',
//   },
//   button: {
//     width: 220,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginVertical: 20,
//     backgroundColor: 'transparent',
//   },
//   dataContaner: {
//     marginBottom: 50
//   },
//   markerFixed: {
//   left: "50%",
//   marginLeft: -24,
//   marginTop: -48,
//   position: "absolute",
//   top: "50%",
//   },
// addressText: {
//   color: "black",
//   margin: 3,
//   fontFamily: "Calibri",
// },
// footer: {
//   backgroundColor: "white",
//   bottom: 0,
//   position: "absolute",
//   width: "100%",
//   height: "30%",
// },

// })

// export default CustomMarkers;























































































































































// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';

// import MapView, {
//   MAP_TYPES,
//   Polygon,
//   ProviderPropType,
// } from 'react-native-maps';
// import {getAreaOfPolygon} from 'geolib';


// interface StatePolygonTypes {
//       polygons: any[],
//       editing: null,
//       creatingHole: boolean
//   };
//   interface StateLocationTypes {
//     region: {
//     latitude: number,
//         longitude: number,
//         latitudeDelta: number,
//         longitudeDelta: number,
//       },
//   }


// const PolygonCreator = (props:any) => {
//     const { width, height } = Dimensions.get('window');
//     const ASPECT_RATIO = width / height;
//     const LATITUDE = 37.78825;
//     const LONGITUDE = -122.4324;
//     const LATITUDE_DELTA = 0.0922;
//     const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//     let id = 0;
//     const [state, setState] = useState<any>({
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       },
//       polygons: [],
//       editing: null,
//       creatingHole: false,
    
//   })

//   const transform = (data:any) => {
//     [{coordinates}] = data
//   const result = coordinates.map((obj:any) => {
//     return Object.values(obj)
//   })
//   return result
//   }

//   const finish = () => {
//     const { polygons, editing } = state;
//     setState({
//       ...state,
//       polygons: [...polygons, editing],
//       editing: null,
//       creatingHole: false,
//     });
//     const res = transform([...polygons, editing]);
//   console.log(getAreaOfPolygon(res), '.../././/././.')
//   }

//   const cancel = () => {
//     setState({
//       ...state,
//       polygons: [],
//       editing: null,
//       creatingHole: false,
//     });
//   }

//   const onPress = (e: any) =>  {
//     const { editing, creatingHole } = state;
//     if (!editing) {
//       setState({
//         ...state,
//         editing: {
//           id: id++,
//           coordinates: [e.nativeEvent.coordinate],
//           holes: [],
//         },
//       });
//     } else if (!creatingHole) {
//       setState({
//         ...state,
//         editing: {
//           ...editing,
//           coordinates: [...editing.coordinates, e.nativeEvent.coordinate],
//         },
//       });
//     } else {
//       const holes = [...editing.holes];
//       holes[holes.length - 1] = [
//         ...holes[holes.length - 1],
//         e.nativeEvent.coordinate,
//       ];
//       setState({
//         editing: {
//           ...state,
//           ...editing,
//           id: id++, // keep incrementing id to trigger display refresh
//           coordinates: [...editing.coordinates],
//           holes,
//         },
//       });
//     }
//   }

//     const mapOptions:any = {
//       scrollEnabled: true,
//     };

//     if (state.editing) {
//       mapOptions.scrollEnabled = false;
//       mapOptions.onPanDrag = (e:any) => onPress(e);
//     }
//     return (
//       <View style={styles.container}>
//         <MapView
//           provider={props.provider}
//           style={styles.map}
//           mapType={MAP_TYPES.HYBRID}
//           initialRegion={state.region}
//           onPress={e => onPress(e)}
//           {...mapOptions}
//         >
//           {state.polygons.map((polygon:any) => (
//             <Polygon
//               key={polygon.id}
//               coordinates={polygon.coordinates}
//               holes={polygon.holes}
//               strokeColor="#F00"
//               fillColor="rgba(255,0,0,0.5)"
//               strokeWidth={1}
//             />
//           ))}
//           {state.editing && (
//             <Polygon
//               key={state.editing.id}
//               coordinates={state.editing.coordinates}
//               strokeColor="#000"
//               fillColor="red"
//               strokeWidth={2}
//             />
//           )}
//         </MapView>
//         <View style={styles.buttonContainer}>
//           {state.editing && (
//             <TouchableOpacity
//               onPress={() => cancel()}
//               style={[styles.bubble, styles.button]}
//             >
//               <Text>
//                 delete
//               </Text>
//             </TouchableOpacity>
//           )}
//           {state.editing && (
//             <TouchableOpacity
//               onPress={() => finish()}
//               style={[styles.bubble, styles.button]}
//             >
//               <Text>Finish</Text>
//             </TouchableOpacity>
//           )}
          
//         </View>
//       </View>
//     );
// }

// PolygonCreator.propTypes = {
//   provider: ProviderPropType,
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   bubble: {
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20,
//   },
//   latlng: {
//     width: 200,
//     alignItems: 'stretch',
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginVertical: 20,
//     backgroundColor: 'transparent',
//   },
// });

// export default PolygonCreator;