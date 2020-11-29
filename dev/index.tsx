import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState} from "react";

import {AppShowcase} from './app-showcase/AppShowcase';

declare const module: any;
let hmrUpdate: undefined | (() => void);

const Start = (): JSX.Element => {
  const [hotRefreshCounter, setHotRefreshCounter] = useState<number>(0);
  hmrUpdate = () => setHotRefreshCounter(hotRefreshCounter + 1);
  return <AppShowcase/>;
};

ReactDOM.render(<Start/>, document.getElementById('dyna-module-root'));

// Todo: fixme: callbacks are not called, only page refresh is taking place.
if (module.hot) {
  module.hot.accept('./app-showcase', function () {
    console.log('Accepting the updated module under dev');
    hmrUpdate && hmrUpdate();
  });

  module.hot.accept('../src', function () {
    console.log('Accepting the updated module under src');
    hmrUpdate && hmrUpdate();
  });
}
