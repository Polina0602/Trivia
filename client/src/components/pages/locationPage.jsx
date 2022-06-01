import React, { useState, useCallback, useEffect } from "react";
import { Paper, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Map, MODES } from "../Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { Autocomplete } from "../Autocomplete/autocomplete";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { getBrowserLocation } from '../Utils/geo'

const API_KEY =  process.env.REACT_APP_API_KEY //"AIzaSyCWOLKQRayc_SOTSW34VQC88VrcN9hfnxo";
console.log(API_KEY);

const defaultCenter = {
  lat: 31.778903,
  lng: 35.240629,
};



const libraries = ["places"];

export default function Location() {
  const { t } = useTranslation();

  const [center, setCenter] = useState(defaultCenter)
  
  const [mode, setMode] =useState(MODES.SET_MARKER)

  const [markers, setMarkers] = useState([])

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback(
    (coordinates) => {
      setCenter(coordinates)
      console.log(coordinates)
    },
    [],
  )

const onMarkerAdd = useCallback(
  (coordinates) => {
  setMarkers([coordinates])
  setCenter(coordinates)       
},
  [markers],
)

const clear = useCallback(() => {
  setMarkers([])
}, [])

useEffect(() => {
  getBrowserLocation().then((curLoc) => {
    setMarkers([])            
    setCenter(curLoc)
  })
  .catch((defaultLocation) => {
    setCenter(defaultLocation)
  });  
}, [])

  return (
    <div className="main">
      <Typography variant="h1" sx={{ fontWeight: "bold" }}>
        {t("Location")}
      </Typography>
      <Paper className="map" elevation={3} >
        <Button onClick={() => {
          setMode(MODES.SET_MARKER)
        }}>
        <h2>{t("Choose from map")}</h2>
        </Button>
      </Paper>
      <Paper className="map" elevation={3}>
        <h2>{t("Choose from list")}</h2>
        <div className="addressSearchContainer">
          <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
        </div>
      </Paper>      
      <Paper className="map" elevation={3}>.
      <Button 
        onClick={() => {
          getBrowserLocation().then((curLoc) => {
            setMarkers([])
            setCenter(curLoc)
          })
        }}>
        <h2>{t("Choose yours")}</h2>
        </Button>           
      </Paper>

      {isLoaded ? <Map center={center} mode={mode} markers={markers} onMarkerAdd={onMarkerAdd}/> : <h2>Loading</h2>}
    </div>
  );
}
