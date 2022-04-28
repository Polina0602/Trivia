import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Map } from "../Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { Autocomplete } from "../Autocomplete/autocomplete";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const API_KEY =  process.env.REACT_APP_API_KEY //"AIzaSyCWOLKQRayc_SOTSW34VQC88VrcN9hfnxo";
console.log(API_KEY);

const defaultCenter = {
  lat: 31.778903,
  lng: 35.240629,
};

const libraries = ["places"];

export default function Location() {
  const { t } = useTranslation();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <div className="main">
      <Typography variant="h1" sx={{ fontWeight: "bold" }}>
        {t("Location")}
      </Typography>
      <Paper className="map" elevation={3}>
        <h2>{t("Choose from map")}</h2>
      </Paper>
      <Paper className="map" elevation={3}>
        <h2>{t("Choose from list")}</h2>
      </Paper>
      <Paper className="map" elevation={3}>
        <h2>{t("Choose yours")}</h2>
        <div className="addressSearchContainer">
          <Autocomplete isLoaded={isLoaded} />
        </div>
      </Paper>

      {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>}
    </div>
  );
}
