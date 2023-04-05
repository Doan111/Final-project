import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { CurrentUserProvider } from "./components/CurrentUserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-ydwggcwz3hz5j1b2.us.auth0.com"
    clientId="sXhRkyM4iumLsfj9IJpcd64WGnouqSBG"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
