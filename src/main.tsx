import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/source/main.less";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./utils/scrollTotop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);
