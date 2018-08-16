import * as React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Home } from "./pages/Home/Home";

interface IProps {
  history: any;
  // container props
  appTitle: string;
}

class App extends React.Component<IProps, any> {
  public componentDidMount() {
    document.title = this.props.appTitle;
  }

  public render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <Switch>
            <Route path={"/"} component={Home} />
          </Switch>
        </ErrorBoundary>
      </ConnectedRouter>
    );
  }
}

export default App;
