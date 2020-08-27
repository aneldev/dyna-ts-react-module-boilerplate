import * as React from 'react';

import {Button, EColor} from '../src';

import {select} from '@storybook/addon-knobs';

export default {
  title: 'Buttons/Simple/My Button',
  notes: 'Examples of the Button component',
};

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
  console.debug('color', color);
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
