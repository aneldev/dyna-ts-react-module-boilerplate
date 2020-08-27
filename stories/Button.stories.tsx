import * as React from 'react';

import {Button, EColor} from '../src';

import {select} from '@storybook/addon-knobs';

import {Meta} from '@storybook/react/types-6-0';

const meta: Meta = {
  title: 'Forms/Text Area',
  component: Button,
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

export const Basic = () => {
  const color = select(
    'Color style',
    [
      EColor.WHITE_BLACK,
      EColor.BLACK_WHITE,
      EColor.WHITE_RED,
      EColor.TRANSPARENT_WHITE,
    ],
    EColor.WHITE_BLACK,
  );
  return (
    <Button
      color={color}
    >
      Submit
    </Button>
  );
};

export const RedButton = () =>
  <Button
    color={EColor.WHITE_RED}
  >
    Submit
  </Button>;
