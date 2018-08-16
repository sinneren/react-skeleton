import * as React from "react";

/**
 * @author Rico Maier <rico.maier@etecture.de>
 */

const styles = require("./ErrorBoundary.scss");

interface IProps {
  children: JSX.Element;
}

interface IState {
  error: Error;
  info: React.ErrorInfo;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  public state: IState = {
    error: null,
    info: null,
  };

  public componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ error, info });
  }

  public render() {
    const { error, info } = this.state;
    return error ? (
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.message}>Something went wrong..</div>
        </div>

        <div className={styles.error}>{error.message}</div>
        <div className={styles.trace}>{info.componentStack}</div>
      </div>
    ) : (
      this.props.children
    );
  }
}
