import * as React from "react";
import {IShowcaseView} from "dyna-showcase";

export const intro: IShowcaseView = {
  slug: 'intro',
  faIconName: 'circle-o-notch',
  title: 'Introduction',
  center: true,
  component: (
    <div>
      <h3>dyna-ts-react-module-boilerplate</h3>
      <h4>demonstrates the <strong>my button</strong> implementation</h4>
      <p>This is the showcase of the boilerplate, as a nice demo this boilerplate has the implementation of the <code>my
        button</code>.</p>
      <p>To start and work with the boilerplate:</p>
      <ul>
        <li>Implement your component under <code>/src</code> folder</li>
        <li>Update the <code>/dev/showcase/showcase.tsx</code> respectively</li>
        <li>Run <code>npm start</code></li>
      </ul>
    </div>
  ),
};

