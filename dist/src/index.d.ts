import * as React from 'react';
import { MouseEventHandler } from "react";
export declare enum EButtonType {
    OK = 0,
    CANCEL = 1,
    OTHER = 2,
}
export interface IPlainButtonProps {
    caption: string;
    buttonType?: EButtonType;
    onClick?: MouseEventHandler<any>;
}
export interface IPlainButtonState {
}
export default class PlainButton extends React.Component<IPlainButtonProps, IPlainButtonState> {
    static defaultProps: IPlainButtonProps;
    constructor(props: IPlainButtonProps, context: any);
    private readonly getTypeClassName;
    render(): JSX.Element;
}
