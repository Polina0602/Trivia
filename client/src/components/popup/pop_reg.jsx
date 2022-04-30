import React from "react";
import "./pop_reg.css";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { Alert, Stack, AlertTitle } from "@mui/material";

const Pop_reg = ({ active, setActive }) => {
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    age: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      console.log(form)
      const data = await request(
        "http://localhost:3500/api/auth/register",
        // "/api/auth/register",
        "POST",
        { ...form }
      );
      message(data.messages);
      // console.log("registerHandler",data.message);
      alert(data.message);

      <Stack spacing={2}>
        <Alert variant="filled" severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>;
    } catch (e) {
      message(e);
      // console.log("registerHandler",e)
      // alert(e)
      return (
        <Stack sx={{ width: "100%" }}>
          <Alert onClose={() => {}}>
            This is a success alert — check it out!
          </Alert>
          {/* <Alert severity="warning">This is a warning alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">This is a success alert — check it out!</Alert> */}
        </Stack>
      );
    }
  };

  const { t } = useTranslation();
  return (
    <div className={active ? "pop_reg active" : "pop_reg"}>
      <div className="pop_reg_content">
        <div className="pop_reg_close" onClick={() => setActive(false)}>
          <CancelIcon />
        </div>
        <TextField
          id="standard-basic"
          name="email"
          type="email"
          label={t("Email")}
          variant="outlined"
          className="reg_input"
          sx={{ mb: 2 }}
          required
          onChange={changeHandler}
        />
        <TextField
          id="standard-basic"
          name="age"
          type="number"
          label={t("Age")}
          variant="outlined"
          className="reg_input"
          sx={{ mb: 2 }}
          onChange={changeHandler}
        />
        <TextField
          id="standard-basic"
          name="password"
          type="password"
          label={t("Password")}
          variant="outlined"
          className="reg_input"
          sx={{ mb: 2 }}
          required
          onChange={changeHandler}
        />
        <span className="musthave">minimum 6 symbols</span>
        <TextField
          id="standard-basic"
          name="passwordConfirm"
          type="password"
          label={t("Confirm password")}
          variant="outlined"
          className="reg_input"
          sx={{ mb: 2 }}
          required
          onChange={changeHandler}
        />

        <Link
          className="button"
          to="/Registration"
          onClick={registerHandler}
          disabled={loading}
        >
          {t("Registration")}
        </Link>
      </div>
    </div>
  );
};

export default Pop_reg;
