import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#323232",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
  <CssBaseline />
    <Router />
  </ThemeProvider>
);
