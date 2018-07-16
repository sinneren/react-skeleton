import * as React from "react";

/**
 * @author Rico Maier <rico.maier@etecture.de>
 */

interface IProps {}

export class HelloWorld extends React.PureComponent<IProps> {
  public render() {
    return <h1>Hello World!</h1>;
  }
}
