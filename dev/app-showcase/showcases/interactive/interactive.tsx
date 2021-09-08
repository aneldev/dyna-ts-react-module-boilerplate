import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import {Button, EColor, ESize, EStyle, IButtonProps} from "../../../../src";

export const interactive: IShowcaseView =     {
  slug: 'interactive',
  faIconName: 'flask',
  title: 'interactive test',
  center: true,
  component: (() => {
    interface IMyAppProps {
      size?: ESize;
    }

    interface IMyAppState {
      clickCounter: number;
    }

    class MyApp extends React.Component<IMyAppProps, IMyAppState> {
      constructor(props: IMyAppProps) {
        super(props);
        this.state = {
          clickCounter: 0,
        };
      }

      public render(): JSX.Element {
        const {size} = this.props;
        const {clickCounter} = this.state;
        return (
          <Button
            size={size}
            onClick={() => this.setState({clickCounter: clickCounter + 1})}
          >Clicks {clickCounter}</Button>
        );
      }
    }

    return <MyApp/>;
  })(),
  props: [
    {
      slug: 'medium',
      title: 'medium',
      props: {
        size: ESize.MEDIUM,
      } as IButtonProps,
    },
    {
      slug: 'large',
      title: 'large',
      props: {
        style: EStyle.ROUNDED,
        color: EColor.WHITE_BLACK,
        size: ESize.LARGE,
      } as IButtonProps,
    },
  ],
};
