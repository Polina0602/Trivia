import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import "../../App.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function FrontPage() {
  const { t } = useTranslation();

  return (
    <div className="main">
      <Typography variant="h1" sx={{ fontWeight: "bold" }}>
        {t("Trivia")}
      </Typography>
      <div className="central_text">
        <Typography
          variant="h6"
          sx={{ maxWidth: "800px", my: "15px", mx: "auto" }}
          paragraph
        >
          {t("About Game")}
        </Typography>
      </div>
      <bh />
      <Link className="button" to="/Registration">
        {t("Start to Play")}
      </Link>
    </div>
  );
}

// export default FrontPage();