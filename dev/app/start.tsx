import * as React from "react";
import {DynaShowcase} from "dyna-showcase";

import showcase from '../showcase/showcase';
const menuStyle = require('dyna-showcase/styles/menu-style-white.module.less');

import "./font-awesome.less";
import "./start.less";

export default class StartApp extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <DynaShowcase
        showcase={showcase}
        menuCssModule={menuStyle}
      />
    );
  }
}
