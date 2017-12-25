import * as React from "react";

import "./dyna-button.less";

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

export interface IDynaButtonProps {
  children: any;
  style?: EStyle;
  color?: EColor;
  size?: ESize;
  href?: string
  onClick?: () => void;
}

export class DynaButton extends React.Component<IDynaButtonProps> {
  static defaultProps: IDynaButtonProps = {
    children: null,
    style: EStyle.ROUNDED,
    color: EColor.WHITE_BLACK,
    size: ESize.MEDIUM,
    href: null,
    onClick: () => undefined,
  };

  public render(): JSX.Element {
    const {
      children, style, color, size, href, onClick
    } = this.props;

    const className: string = [
      'dyna-button',
      `dnbtn-style-${style}`,
      `dnbtn-color-${color}`,
      `dnbtn-size-${size}`,
    ].join(' ').trim();

    return (
      <a className={className} href={href} onClick={onClick}>
        <button>{children}</button>
      </a>
    );
  }
}
