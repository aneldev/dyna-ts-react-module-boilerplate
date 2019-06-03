import * as React from 'react';
import {faIcon, IShowcase, IShowcaseViewProps} from "dyna-showcase";
import {Logo} from "../logo";

import {intro} from "./views/intro";
import {sizes} from "./views/sizes";
import {interactive} from "./views/interactive";
import {allTogether} from "./views/all-together";

import "./style.less";
import {theEnd} from "./views/the-end";

export default {
  logo: <Logo/>,
  views: [
    intro,
    sizes,
    interactive,
    allTogether,
    theEnd,
  ]
}as IShowcase;
