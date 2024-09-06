import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import {Button, EColor, ESize, EStyle, IButtonProps} from "../../../src/Button";

export const sizes: IShowcaseView = {
  slug: 'sizes',
  faIconName: 'flask',
  title: 'rounded - white/black - sizes',
  center: true,
  component: (
    <Button
      onClick={() => console.log('button pressed')}
    >my button</Button>
  ),
  wrapperStyle: {},
  props: [
    {
      slug: 'small',
      title: 'small',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.WHITE_BLACK,
        size: ESize.SMALL,
      } as IButtonProps,
    },
    {
      slug: 'medium',
      title: 'medium',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.WHITE_BLACK,
        size: ESize.MEDIUM,
      } as IButtonProps,
    },
    {
      slug: 'large',
      title: 'large',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.WHITE_BLACK,
        size: ESize.LARGE,
      } as IButtonProps,
    },
    {
      slug: 'x-large',
      title: 'x-large',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.WHITE_BLACK,
        size: ESize.XLARGE,
      } as IButtonProps,
    },
  ],
};
