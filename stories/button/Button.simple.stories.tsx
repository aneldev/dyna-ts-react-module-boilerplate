import {Meta} from '@storybook/react/types-6-0';

import {
  Button,
  EStyle,
  ESize,
  EColor,
} from "../../src/Button";

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
  <div style={{backgroundColor: 'gray'}}>
    {mapEnumValues(EStyle, style =>
      mapEnumValues(ESize, size =>
        mapEnumValues(EColor, color => (
          <div
            key={index++}
            style={{marginBottom: '8px'}}
          >
            <Button
              style={style}
              size={size}
              color={color}
            >
              Click me
            </Button>
          </div>
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
