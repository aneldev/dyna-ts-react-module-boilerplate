import {Meta} from '@storybook/react/types-6-0';

import {
  Button,
  EStyle,
  ESize,
  EColor,
} from "./";

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {},
  decorators: [
    (Component: any) => (
      <Component/>
    ),
  ],
};

export default meta;

let index = 0;

export const Variations = () => (
  <div>
    {mapEnumValues(EStyle, style =>
      mapEnumValues(ESize, size =>
        mapEnumValues(EColor, color => (
          <Button
            key={index++}
            style={style}
            size={size}
            color={color}
          >
            Click me
          </Button>
        )),
      ),
    )}
  </div>
);

const mapEnumValues =
  <TEnum extends Record<string, string>, TOutput>
  (
    en: TEnum,
    cb: (enumValue: any, index: number) => TOutput,
  ): TOutput[] =>
    Object.values(en)
      .map((value, index) => cb(value as any, index));
