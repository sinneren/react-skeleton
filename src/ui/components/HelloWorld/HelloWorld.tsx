import * as React from "react";

const styles = require("./HelloWorld.scss");

interface IProps {}

export class HelloWorld extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Hello World!</div>
        <div className={styles.description}>
          <p>This is a Boilerplate-App for React 16 with Redux and HMR support.</p>
          <p>This setup features the following tools on top of webpack 4:</p>

          <ul>
            <li>React 16.4.1</li>
            <li>Typescript 2.9.2 <small>via awesome-typescript-loader 5.2.0</small></li>
            <li>TSLint 5.10.0</li>
            <li>SASS <small>via sass-loader</small></li>
            <li>CSS-Modules</li>
            <li>HMR <small>via react-hot-loader 4.3.3</small></li>
            <li>Redux <small>via react-redux 5.0.7</small></li>
            <li>Routing <small>via connected-router-redux 4.4.1</small></li>
          </ul>

        </div>
      </div>
    );
  }
}
