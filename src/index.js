import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

if ("requestIdleCallback" in window) {
  requestIdleCallback(() => {
    import("./reportWebVitals").then(({ default: reportWebVitals }) =>
      reportWebVitals()
    );
  });
}
