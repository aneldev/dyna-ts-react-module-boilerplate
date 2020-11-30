import * as React from 'react';

import {Meta} from '@storybook/react/types-6-0';

const meta: Meta = {
  title: 'Demo',
  // component: MyComponent,
  argTypes: {
  },
  decorators: [
    (Component: any) => (
      <div
        style={{background: 'linear-gradient(141deg, gray, lightgray)', width: 'calc(100% - 16px)', height: '400px', padding: '8px'}}
      >
        <Component />
      </div>
    ),
  ],
};

export default meta;

export const Empty = () =>
  <div>Empty story</div>;
