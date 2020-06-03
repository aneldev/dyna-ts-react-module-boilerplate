import * as React      from "react";

import "./Button.less";

export enum EStyle {
  ROUNDED = "ROUNDED",
}

export enum EColor {
  WHITE_BLACK = "WHITE_BLACK",
  WHITE_RED = "WHITE_RED",
  BLACK_WHITE = "BLACK_WHITE",
  TRANSPARENT_WHITE = "TRANSPARENT_WHITE",
}

export enum ESize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  XLARGE = "XLARGE",
}

export interface IButtonProps {
  children: any;
  style?: EStyle;
  color?: EColor;
  size?: ESize;
  href?: string;
  onClick?: () => void;
}

export class Button extends React.Component<IButtonProps> {
  static defaultProps: IButtonProps = {
    children: null,
    style: EStyle.ROUNDED,
    color: EColor.WHITE_BLACK,
    size: ESize.MEDIUM,
    href: undefined,
    onClick: () => undefined,
  };


  public render(): JSX.Element {
    const {
      children, style, color, size, href, onClick,
    } = this.props;

    const className: string = `my-button my-button--style-${style} my-button--color-${color} my-button--size-${size}`;

    return (
      <a className={className} href={href} onClick={onClick}>
        <button>{children}</button>
      </a>
    );
  }
}
