import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState} from "react";

import {App} from './app/App';

const appWrapperID: string = 'app-container';
const appElement: HTMLElement = document.createElement("DIV");
appElement.id = appWrapperID;
document.body.appendChild(appElement);

declare const module: any;
let hmrUpdate: undefined | (() => void);

const Start = (): JSX.Element => {
  const [hotRefreshCounter, setHotRefreshCounter] = useState<number>(0);
  hmrUpdate = () => setHotRefreshCounter(hotRefreshCounter + 1);
  return <App/>;
};

ReactDOM.render(<Start/>, appElement);

// Todo: fixme: callback are not called, only refresh is taking place.
if (module.hot) {
  module.hot.accept('./app/App', function () {
    console.log('Accepting the updated module under dev');
    hmrUpdate && hmrUpdate();
  });
  module.hot.accept('./showcases', function () {
    console.log('Accepting the updated module under dev');
    hmrUpdate && hmrUpdate();
  });

  module.hot.accept('../src', function () {
    console.log('Accepting the updated module under src');
    hmrUpdate && hmrUpdate();
  });
}
