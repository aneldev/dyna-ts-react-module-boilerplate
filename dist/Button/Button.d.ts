import * as React from "react";
import "./Button.less";
export declare enum EStyle {
    ROUNDED = "ROUNDED"
}
export declare enum EColor {
    WHITE_BLACK = "WHITE_BLACK",
    WHITE_RED = "WHITE_RED",
    BLACK_WHITE = "BLACK_WHITE",
    TRANSPARENT_WHITE = "TRANSPARENT_WHITE"
}
export declare enum ESize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE",
    XLARGE = "XLARGE"
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
export declare class Button extends React.Component<IButtonProps> {
    static defaultProps: IButtonProps;
    render(): JSX.Element;
}
