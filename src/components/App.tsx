import * as React from "react";
import { connect } from "react-redux";

const styles = require("./App.scss");

interface IProps {
  // container props
  appTitle: string;
}

class App extends React.Component<IProps, any> {
  public render() {
    return (
      <div className={styles.appContainer}>
        <p>{this.props.appTitle}</p>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  appTitle: state.appState.appTitle,
});

export const RootComponent = connect(mapStateToProps, null)(App);
