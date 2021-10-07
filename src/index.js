import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      // main: "rgb(94, 72, 192)",
      main: "#fff",
    },
    secondary: {
      main: "rgb(63,76,124)",
      background: "rgb(34,42,68)",
    },
  },
});

ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
