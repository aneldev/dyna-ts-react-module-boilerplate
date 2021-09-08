import * as React from 'react';
import {IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import {intro} from "./intro/intro";
import {sizes} from "./sizes/sizes";
import {interactive} from "./interactive/interactive";
import {allTogether} from "./all-together/all-together";
import {cssLoaders} from "./css-loaders/css-loaders";

import "./style.less";
import {theEnd} from "./the-end/the-end";

export default {
  logo: <Logo/>,
  views: [
    intro,
    sizes,
    interactive,
    allTogether,
    cssLoaders,
    theEnd,
  ],
}as IShowcase;
