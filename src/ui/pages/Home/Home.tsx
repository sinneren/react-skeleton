import * as React from "react";
import { HelloWorld } from "../../components/HelloWorld/HelloWorld";

interface IProps {}

export class Home extends React.PureComponent<IProps> {
  public render() {
    return <HelloWorld />;
  }
}
