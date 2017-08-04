import * as React from 'react';

import {MouseEventHandler} from "react";

let  stylesFromLess: any = require("./index.less");
let  stylesFromScss: any = require("./index.scss");

export enum EButtonType {
  OK, CANCEL, OTHER
}

export interface IPlainButtonProps {
  caption: string;
  buttonType?: EButtonType;
  onClick?: MouseEventHandler<any>;
}
export interface IPlainButtonState {
}

export default
class PlainButton extends React.Component<IPlainButtonProps, IPlainButtonState> {
  public static defaultProps: IPlainButtonProps = {
    caption: '',
    buttonType: EButtonType.OTHER,
    onClick: () => undefined,
  };

  constructor(props: IPlainButtonProps, context: any) {
    super(props, context);
  }

  private get getTypeClassName():string{
    switch (this.props.buttonType){
      case EButtonType.OK: return stylesFromLess.ok;
      case EButtonType.CANCEL: return stylesFromLess.cancel;
      case EButtonType.OTHER: return stylesFromLess.other;
    }
  }

  public render(): JSX.Element {
    // ReactDOM;
    let className:string = `${stylesFromLess.plainButton} ${stylesFromScss.plainButton} ${this.getTypeClassName}`;
    return (
      <button className={className} onClick={this.props.onClick}>
        {this.props.caption}
      </button>
    );
  }

}

