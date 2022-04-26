import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Location() {
  const { t } = useTranslation();
  return (
    <div className="main">
      <Typography variant="h1" sx={{ fontWeight: "bold" }}>
        {t("Location")}
      </Typography>
      <Paper className="map" elevation={3}>
        <h2>{t('Choose from map')}</h2>
      </Paper>
      <Paper className="map" elevation={3}>
        <h2>{t('Choose from list')}</h2>
      </Paper>
      <Paper className="map" elevation={3}>
        <h2>{t('Choose yours')}</h2>
      </Paper>
    </div>
  );
}
