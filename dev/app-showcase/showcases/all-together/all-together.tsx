import * as React from "react";
import {IShowcaseView, IShowcaseViewProps} from "dyna-showcase";
import {Button, EColor, ESize, EStyle, IButtonProps} from "../../../../src";

export const allTogether: IShowcaseView =     {
  slug: 'all-together',
  faIconName: 'flask',
  title: 'style color and size',
  center: true,
  component: (
    <Button
      onClick={() => console.log('button pressed')}
    >my button</Button>
  ),
  wrapperStyle: {},
  props: (() => {
    const props: IShowcaseViewProps[] = [];
    Object.keys(EStyle).forEach((style: EStyle) => {
      Object.keys(ESize).forEach((size: ESize) => {
        Object.keys(EColor).forEach((color: EColor) => {
          props.push({
            slug: `style-${style}-size-${size}-color-${color}`,
            title: `${style.toLocaleLowerCase()} ${size.toLocaleLowerCase()} ${color.toLocaleLowerCase()}`,
            props: {
              style,
              size,
              color,
            } as IButtonProps,
          } as IShowcaseViewProps);
        });
      });
    });
    return props;
  })()
};
