import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import {RootComponent} from "./components/App";

// GLOBAL STYLES
require("./assets/scss/styles.scss");

// REDUX STORE
const store = configureStore({});

const root = document.getElementById("root");

const render = (Component: any) => {
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer warnings={false}>
          <Component />
        </AppContainer>
      </Provider>,
      root,
    );
};

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const newApp = require("./components/App").RootComponent;

    render(newApp);
  });
}

render(RootComponent);
