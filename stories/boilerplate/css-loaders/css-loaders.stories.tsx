import {Meta} from '@storybook/react/types-6-0';

import "./css-loaders.css";
import "./css-loaders.less";
import * as lessStyles from './css-loaders.module.less';
// import "./css-loaders.scss";
// import * as sassStyles from './css-loaders.module.scss';

const meta: Meta = {
  title: 'Boilerplate',
  component: undefined,
  argTypes: {},
  decorators: [
    (Component: any) => <Component/>,
  ],
};

export const CSSLoaders = () => (
  <div style={{backgroundColor: "white"}}>
    <h1>CSS loaders</h1>

    <h3 className="intro-css-loaders__label--css">CSS loader, should be gray</h3>
    <h3 className="intro-css-loaders__label--less">LESS loader, should be purple</h3>
    <h3 className={lessStyles.label}>LESS module loader, should be blueviolet</h3>
    {/*<h3 className="intro-css-loaders__label--scss">SCSS loader, should be pink</h3>*/}
    {/*<h3 className={sassStyles.label}>SCSS module loader, should be deeppink</h3>*/}
  </div>
);

export default meta;
