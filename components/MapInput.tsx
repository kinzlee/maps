import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';



const MapInput = () =>{
  Geocoder.init('AIzaSyBVoksJrHmY7RS0g10rNH0aUIpx6mscSig') // use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

Geocoder.from("no 7 Abaniwonda Close, Lagos, Nigeria")
		.then(json => {
			var location = json.results[0].geometry.location;
			console.log(location);
		})
		.catch(error => console.warn(error));
    return (
        <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: 'AIzaSyBVoksJrHmY7RS0g10rNH0aUIpx6mscSig',
          language: 'en', // language of the results
        }}
        onPress={(data, details = null) => console.log(data)}
        onFail={(error) => console.error(error)}

      />

    )
}

export default MapInput;