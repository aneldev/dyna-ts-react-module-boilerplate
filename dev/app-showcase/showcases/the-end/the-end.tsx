import * as React from "react";
import {faIcon, IShowcaseView} from "dyna-showcase";

export const theEnd: IShowcaseView = {
  slug: 'the-end',
  title: 'the end',
  description: 'Thank you',
  center: true,
  component: (
    <div style={{ textAlign: 'center' }}>
      <h1>The end</h1>
      <div style={{ fontSize: '20px' }}>
        <p><a href="https://github.com/aneldev/dyna-ui-button">{faIcon('github')} Github</a></p>
        <p><a href="https://www.npmjs.com/package/dyna-ui-button">{faIcon('square')} npm</a></p>
      </div>
    </div>
  ),
};
