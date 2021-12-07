import * as React from "react";

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
  className?: string;
  style?: EStyle;
  color?: EColor;
  size?: ESize;
  href?: string;
  children: any;
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
      className: userClassName,
      style,
      color,
      size,
      href,
      children = null,
      onClick,
    } = this.props;

    const className: string = [
      userClassName,
      `my-button my-button--style-${style} `,
      `my-button--color-${color}`,
      `my-button--size-${size}`,
    ].filter(Boolean).join(' ');

    return (
      <a
        className={className}
        href={href}
        onClick={onClick}
      >
        <button>{children}</button>
      </a>
    );
  }
}
