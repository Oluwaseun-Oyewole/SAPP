import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/css/tailwind-output.css";
import "./stylesheets/sass/index.scss";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
