import * as React from "react";
import "./dyna-button.less";
export declare enum EStyle {
    ROUNDED = "ROUNDED",
}
export declare enum EColor {
    WHITE_BLACK = "WHITE_BLACK",
    WHITE_RED = "WHITE_RED",
    BLACK_WHITE = "BLACK_WHITE",
    TRANSPARENT_WHITE = "TRANSPARENT_WHITE",
}
export declare enum ESize {
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
    href?: string;
    onClick?: () => void;
}
export declare class DynaButton extends React.Component<IDynaButtonProps> {
    static defaultProps: IDynaButtonProps;
    render(): JSX.Element;
}
