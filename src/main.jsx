import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import GenreInitializer from "./app/genres/GenreInitializer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  
      <GenreInitializer/>
      <App />
    
  </Provider>
);
