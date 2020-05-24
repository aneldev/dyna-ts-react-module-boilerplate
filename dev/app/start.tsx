import * as React from "react";
import {DynaShowcase} from "dyna-showcase";

import showcase from '../showcase';
const menuStyle = require('dyna-showcase/styles/menu-style-white.module.less');

import "./start.less";

declare const module: any;
let forceUpdate: any;

export default class StartApp extends React.Component<any, any> {
  public componentDidMount(): void {
    forceUpdate = this.forceUpdate();
  }

  public render(): JSX.Element {
    return (
      <DynaShowcase
        showcase={showcase}
        menuCssModule={menuStyle}
      />
    );
  }
}

if (module.hot) {
  // todo: fix me
  module.hot.accept('./../showcase/index.tsx', function () {
    console.log('Accepting the updated module under dev');
    forceUpdate();
  });
  module.hot.accept('./../../src', function () {
    console.log('Accepting the updated module under src');
    forceUpdate();
  });
}
