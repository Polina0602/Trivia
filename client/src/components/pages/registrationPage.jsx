import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import Pop_reg from "../popup/pop_reg";
import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

export default function Registration() {
  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:3500/api/auth/google",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log("Google login success", response);
    });
  };

  const responseErrorGoogle = (response) => {
    
  };

  const responseFacebook = (response) => {
    axios({
      method: "POST",
      url: "http://localhost:3500/api/auth/facebook",
      data: { accessToken: response.accessToken, userID: response.userID },
    }).then((response) => {
      console.log("Facebook login success, client side", response);
    });
  };

  const { loading, error, request } = useHttp();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request(
        "http://localhost:3500/api/auth/login",
        "POST",
        { ...form }
      );
      console.log(data);
    } catch (e) {}
  };

  const { t } = useTranslation();

  const [modalActive, setModalActive] = useState(false);

  return (
    <Box className="main">
      <Typography variant="h1" sx={{ fontWeight: "bold" }}>
        {t("Login with")}
      </Typography>
      <div className="left_side">
        <TextField
          id="standard-basic"
          name="email"
          label={t("Email")}
          variant="outlined"
          className="reg_input"
          sx={{ mb: 2 }}
          required
          onChange={changeHandler}
        />
        <TextField
          id="standard-basic"
          name="password"
          label={t("Password")}
          variant="outlined"
          className="reg_input"
          required
          onChange={changeHandler}
        />

        <Link className="button" to="/Registration" onClick={loginHandler}>
          {t("Login")}
        </Link>
      </div>
      <div className="right_side">
        <FacebookLogin
          className="socButton"
          appId="691605551987315"
          autoLoad={false}
          callback={responseFacebook}
        />
        
        <GoogleLogin
          className="socButton"
          clientId="602070662525-cg5up3456lcbdngu7nhji2j6inpi8t1b.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
        
        <div className="button" onClick={() => setModalActive(true)} to="/">
          {t("Registration")}
        </div>
        <Pop_reg active={modalActive} setActive={setModalActive} />
      </div>
    </Box>
  );
}
