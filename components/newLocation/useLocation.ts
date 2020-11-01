import { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

interface LocationResponse {
  locationUse: Location.LocationObject | undefined;
  locationError: string | undefined;
}

const useLocation = (): LocationResponse => {
  const [locationUse, setLocationUse] = useState<
    Location.LocationObject | undefined
  >();
  const [locationError, setLocationError] = useState<string | undefined>();
  useEffect(() => {
    let location;
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setLocationError("Permission to access location was denied");
      }

      location = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.High
      }, (location) => {
        console.log(location, '.........')
        setLocationUse(location);
      });
    })();
    () => {
      return location.remove()
    }
  }, []);

  return { locationUse, locationError };
};

export default useLocation;
