import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "./components/App";
import configureStore from "./redux/store";

// GLOBAL STYLES
require("./assets/scss/styles.scss");

// REDUX STORE
const {store, history} = configureStore({});

const root = document.getElementById("root");
const RootComponent = (
  <Provider store={store}>
    <AppContainer history={history} />
  </Provider>
);

ReactDOM.render(RootComponent, root);
