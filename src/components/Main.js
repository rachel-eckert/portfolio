import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import About from "./About";
import Portfolio from "./Portfolio";
/*
    This is you entry point for your routes
*/
const anchors = ["firstPage", "secondPage"];

const Main = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <About />
          <Portfolio className="child" />
        </div>
      </div>
    </Router>
  );
};

export default Main;
