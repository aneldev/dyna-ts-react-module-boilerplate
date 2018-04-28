import * as React from 'react';
import {faIcon, IShowcase, IShowcaseViewProps} from "dyna-showcase";
import {Logo} from "../logo";

import {Button, EColor, ESize, EStyle, IButtonProps} from "../../src";

import "./showcase.less";

export default {
  logo: <Logo />,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna-ts-react-module-boilerplate</h3>
          <h4>demonstrates the <strong>dyna button</strong> implementation</h4>
          <p>This is the showcase of the boilerplate, as a nice demo this boilerplate has the implementation of the <code>dyna button</code>.</p>
          <p>To start and work with the boilerplate:</p>
          <p><ul>
            <li>Implement your component under <code>/src</code> folder</li>
            <li>Update the <code>/dev/showcase/showcase.tsx</code> respectively</li>
            <li>Run <code>npm start</code></li>
          </ul></p>
        </div>
      ),
    },
    {
      slug: 'sizes',
      faIconName: 'flask',
      title: 'rounded - white/black - sizes',
      center: true,
      component: (
        <Button
          onClick={() => console.log('button pressed')}
        >dyna button</Button>
      ),
      wrapperStyle:{
      },
      props: [
        {
          slug: 'small',
          title: 'small',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.SMALL,
          } as IButtonProps
        },
        {
          slug: 'medium',
          title: 'medium',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.MEDIUM,
          } as IButtonProps
        },
        {
          slug: 'large',
          title: 'large',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.LARGE,
          } as IButtonProps
        },
        {
          slug: 'x-large',
          title: 'x-large',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.XLARGE,
          } as IButtonProps
        },
      ]
    },
    {
	    slug: 'interactive',
	    faIconName: 'flask',
	    title: 'interactive test',
	    center: true,
	    component: (() => {
		    interface IMyAppProps {
			    size?: ESize;
		    }

		    interface IMyAppState {
			    clickCounter?: number;
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
				    )
			    }
		    }

		    return <MyApp/>
	    })(),
	    props: [
		    {
			    slug: 'medium',
			    title: 'medium',
			    props: {
				    size: ESize.MEDIUM,
			    } as IButtonProps
		    },
		    {
			    slug: 'large',
			    title: 'large',
			    props: {
				    style: EStyle.ROUNDED,
				    color: EColor.WHITE_BLACK,
				    size: ESize.LARGE,
			    } as IButtonProps
		    },
	    ],
    },
	  {
		  slug: 'all-together',
		  faIconName: 'flask',
		  title: 'style color and size',
		  center: true,
		  component: (
			  <Button
				  onClick={() => console.log('button pressed')}
			  >dyna button</Button>
		  ),
		  wrapperStyle: {},
		  props: (() => {
			  const props: IShowcaseViewProps[] = [];

			  Object.keys(EStyle).forEach((style: EStyle) => {
				  Object.keys(ESize).forEach((size: ESize) => {
					  Object.keys(EColor).forEach((color: EColor) => {
						  props.push({
							  slug: `style-${style}-size-${size}-color-${color}`,
							  title: `${style.toLocaleLowerCase()} ${size.toLocaleLowerCase()} ${color.toLocaleLowerCase()}`,
							  props: {
								  style,
								  size,
								  color,
							  } as IButtonProps,
						  }as IShowcaseViewProps)
					  });
				  });
			  });
			  return props;
		  })()
	  },
    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-ui-button">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ui-button">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
