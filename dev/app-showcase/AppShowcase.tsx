import * as React from "react";
import {DynaShowcase} from "dyna-showcase";

import showcase from './showcases';

import * as menuStyle from 'dyna-showcase/styles/menu-style-white.module.less';

import "./AppShowcase.less";

export const AppShowcase = () =>
  <DynaShowcase
    showcase={showcase}
    menuCssModule={menuStyle}
  />;

