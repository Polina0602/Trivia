import { GoogleMap, Marker } from "@react-google-maps/api";
// import { GoogleMap, MarkerClusterer } from "@react-google-maps/api";
import React, { useCallback } from "react";
import "../Map/map.module.css";
import { defaultTheme } from "./theme";
import { useRef } from "react";
// import {Marker} from '../Marker'
// import { CurrentLocationMarker } from '../currentLocationMarker'

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

// const center = {
//   lat: 31.778903,
//   lng: 35.240629,
// };


export const MODES = {
  MOVE: 0,
  SET_MARKER: 1
}

const Map = ({ center, mode, markers, onMarkerAdd }) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const onClick = useCallback((loc) => {
    if (mode === MODES.SET_MARKER) {
      const lat = loc.latLng.lat();
      const lng = loc.latLng.lng();
      if (lat > 32.04390507642045 && lat < 32.13145857097964 && lng > 34.78192094305317 && lng < 34.80686907015528) {
        window.location.replace("http://localhost:3000/Questions")

      } if (lat > 32.69782788140576 && lat < 32.73956659741151 && lng > 35.29584777550964 && lng < 35.34540069648257) {
        window.location.replace("http://localhost:3000/Qustions1")
      }
      console.log(lat, lng)
      onMarkerAdd({ lat, lng })
    }
  }, [mode])



  return (
    <div className="googleMap">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onClick}
        options={defaultOptions}
      >
        {/* <CurrentLocationMarker position={center} />  */}

        <Marker position={center} />

        {markers.map((pos) => {
          return <Marker position={pos} />
        })}




        <></>
      </GoogleMap>
    </div>
  );
};

// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const API_KEY = "AIzaSyAGJiLGMcbkohTjHeU8iR7stL4YVnFTO24";
// console.log(API_KEY);

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// function Map(center) {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: API_KEY,
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

export { Map };
