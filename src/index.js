import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
function pathNotFound(pathname) {
  const paths = ["/", "/map", "/today_hourly", "/setting"];
  for (let path of paths) {
    if (path === pathname) return;
  }
  window.location.pathname = "/";
}
pathNotFound(window.location.pathname); // if user types wrong path it will automatically redirect it to "HOME"
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
