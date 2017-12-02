import * as React from 'react';
import * as ReactDOM from 'react-dom';

import StartApp from './start';

const appWrapperID: string = 'app-container';
const appElement: HTMLElement = document.createElement("DIV");
appElement.id = appWrapperID;
document.body.appendChild(appElement);

ReactDOM.render(<StartApp />, appElement);

