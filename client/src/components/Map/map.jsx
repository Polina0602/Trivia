import { GoogleMap } from "@react-google-maps/api";
import React from "react";
import "../Map/map.module.css";
import { defaultTheme } from "./theme";
import { useRef } from "react";

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

const Map = ({ center }) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="googleMap">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
         {/* Child components, such as markers, info windows, etc. */}
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
