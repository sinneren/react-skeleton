import * as React from "react";

const styles = require("./App.scss");

class App extends React.Component {
  public render() {
    return (
      <div className={styles.appContainer}>
        <p>React + Typescript + HMR</p>
      </div>
    );
  }
}

export default App;
