import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import About from "./About";
import Portfolio from "./Portfolio";
import Tech from "./Tech";
/*
    This is you entry point for your routes
*/

const theme = createTheme({
  typography: {
    fontFamily: "Courier",
  },
  palette: {
    primary: {
      main: "#1B4332",
    },
    secondary: {
      main: "#B7E4C7",
    },
  },
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <About />
            <Tech className="child" />
            <Portfolio />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default Main;
