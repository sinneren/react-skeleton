import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

// APP WRAPPER
import App from "./components/App";

// GLOBAL STYLES
require("./assets/scss/styles.scss");

const root = document.getElementById("root");

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  root,
);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const newApp = require("./components/App").default;

    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      root,
    );
  });
}
