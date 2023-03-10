import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
