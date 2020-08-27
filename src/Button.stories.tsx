import * as React from 'react';
import {Button, EColor} from './Button';

export default {title: 'My Button'};

export const basic = () =>
  <Button
    color={EColor.WHITE_BLACK}
  >
    Submit
  </Button>;
