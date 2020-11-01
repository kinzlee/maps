import  {useEffect, useState}  from 'react';
import { Alert } from 'react-native';
import useLocation from './useLocation';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import { LocationObject } from 'expo-location';
import {getDistanceFromLatLonKm} from '../getDistanceFromLatLonInKm';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

interface LocationResponse {
  location: Location.LocationObject | undefined;
  locationError: string | undefined;
}

export default function useGetLocation(): LocationResponse {
    const {locationUse} = useLocation();
    console.log(locationUse, '.../././/./.')
    const [location, setLocation] = useState<Location.LocationObject |undefined> ();
    const [history, setHistory] = useState<any>([]);
    const [distance, setDistance] = useState<number>();
    const [locationError, setLocationError] = useState<string | undefined>();
  useEffect(() => {


      (async () => {
      let { status } = await Location.requestPermissionsAsync();
      console.log(status, 'ststtttt')
      if (status !== "granted") {
        setLocationError("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High
      });
      setLocation(location);
        const exactPoint = 

    })();




    


    // BackgroundGeolocation.configure({
    //   desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
    //   stationaryRadius: 50,
    //   distanceFilter: 50,
    //   notificationTitle: 'Background tracking',
    //   notificationText: 'enabled',
    //   // debug: true,
    //   startOnBoot: false,
    //   stopOnTerminate: true,
    //   locationProvider: BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
    //   interval: 10000,
    //   fastestInterval: 5000,
    //   activitiesInterval: 10000,
    //   stopOnStillActivity: false,
    //   url: 'http://192.168.81.15:3000/location',
    //   httpHeaders: {
    //     'X-FOO': 'bar'
    //   },
    //   // customize post properties
    //   postTemplate: {
    //     lat: '@latitude',
    //     lon: '@longitude',
    //     foo: 'bar' // you can also add your own properties
    //   }
    // });
    // BackgroundGeolocation.on('location', (location) => {
    //     console.log('loc', location);
    //     setLocation((prev):LocationObject|undefined => ({
    //         ...prev,
    //         latitude: location.latitude,
    //         longitud: location.longitude
    //     }))
    //   // handle your locations here
    //   // to perform long running operation on iOS
    //   // you need to create background task
    //   BackgroundGeolocation.startTask(taskKey => {
    //       setHistory((prev) => {
    //           setDistance((prevDistance) => {
    //               if(prev.length === 0) {
    //                   return 0;
    //               }
    //               const latestItem = prev[prev.length - 1];
    //               return (
    //                   prevDistance +
    //                    getDistanceFromLatLonKm(
    //                      latestItem.latitude,
    //                     latestItem.longitude, 
    //                     location.latitude, 
    //                     location.longitude)
    //           )
    //           })

    //           return prev.concat({
    //               latitude:location.latitude,
    //               longitude:location.longitude
    //           })
    //       })
    //     // execute long running task
    //     // eg. ajax post location
    //     // IMPORTANT: task has to be ended by endTask
    //     BackgroundGeolocation.endTask(taskKey);
    //   });
    // });

    // BackgroundGeolocation.on('stationary', (stationaryLocation) => {
    //   // handle stationary locations here
    // });

    // BackgroundGeolocation.on('error', (error) => {
    // //   console.log('[ERROR] BackgroundGeolocation error:', error);
    // });

    // BackgroundGeolocation.on('start', () => {
    // //   console.log('[INFO] BackgroundGeolocation service has been started');
    // });

    // BackgroundGeolocation.on('stop', () => {
    // //   console.log('[INFO] BackgroundGeolocation service has been stopped');
    // });

    // BackgroundGeolocation.on('authorization', (status) => {
    //   console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
    //   if (status !== BackgroundGeolocation.AUTHORIZED) {
    //     // we need to set delay or otherwise alert may not be shown
    //     setTimeout(() =>
    //       Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
    //         { text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
    //         { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
    //       ]), 1000);
    //   }
    // });

    // BackgroundGeolocation.on('background', () => {
    //   console.log('[INFO] App is in background');
    // });

    // BackgroundGeolocation.on('foreground', () => {
    //   console.log('[INFO] App is in foreground');
    // });

    // BackgroundGeolocation.on('abort_requested', () => {
    //   console.log('[INFO] Server responded with 285 Updates Not Required');

    //   // Here we can decide whether we want stop the updates or not.
    //   // If you've configured the server to return 285, then it means the server does not require further update.
    //   // So the normal thing to do here would be to `BackgroundGeolocation.stop()`.
    //   // But you might be counting on it to receive location updates in the UI, so you could just reconfigure and set `url` to null.
    // });

    // BackgroundGeolocation.on('http_authorization', () => {
    //   console.log('[INFO] App needs to authorize the http requests');
    // });

    // BackgroundGeolocation.checkStatus(status => {
    //   console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
    //   console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
    //   console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

    //   // you don't need to check status before start (this is just the example)
    //   if (!status.isRunning) {
    //     BackgroundGeolocation.start(); //triggers start on start event
    //   }
    // });

    
  }, [])

  return {
      location, distance, history
  }
}