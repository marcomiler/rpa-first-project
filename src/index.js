import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import "./assets/css/spinner.css";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import App from "./App";
import AppRouter from "./routes/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter/> 
  </React.StrictMode>,
  document.getElementById("root")
);
