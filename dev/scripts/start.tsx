import * as React from "react";
import PlainButton, {EButtonType} from "../../src/";

const styles = require('./start.less');

export default
class LoadMore extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <h1>The plain button component</h1>
        <h2>Ok button</h2>
        <PlainButton
          buttonType={EButtonType.OK}
          caption="Ok"
          onClick={() => console.log('ok button pressed')}
        />
        <h2>Cancel button</h2>
        <PlainButton
          buttonType={EButtonType.CANCEL}
          caption="Cancel"
          onClick={() => console.log('cancel button pressed')}
        />
        <h2>Other button</h2>
        <PlainButton
          buttonType={EButtonType.OTHER}
          caption="Other"
          onClick={() => console.log('other button pressed')}
        />
      </div>
    );
  }
}
