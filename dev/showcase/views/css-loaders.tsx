import * as React from "react";
import {IShowcaseView} from "dyna-showcase";

import "./css-loaders.css";
import "./css-loaders.less";
const lessStyles = require('./css-loaders.module.less');
import "./css-loaders.scss";
const sassStyles = require('./css-loaders.module.scss');

export const cssLoaders: IShowcaseView = {
  slug: 'css-loaders',
  faIconName: 'circle-o-notch',
  title: 'CSS Loaders',
  description: 'All css loaders together',
  center: true,
  component: (
    <div style={{ backgroundColor: "white" }}>
      <h1>CSS loaders</h1>

      <h3 className="intro-css-loaders__label--css">CSS loader, should be gray</h3>
      <h3 className="intro-css-loaders__label--less">LESS loader, should be purple</h3>
      <h3 className={lessStyles.label}>LESS module loader, should be blueviolet</h3>
      <h3 className="intro-css-loaders__label--scss">SCSS loader, should be pink</h3>
      <h3 className={sassStyles.label}>SCSS module loader, should be deeppink</h3>
    </div>
  ),
};

