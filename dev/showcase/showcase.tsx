import * as React from 'react';
import {DynaButton, EColor, ESize, EStyle, IDynaButtonProps} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";
import {IShowcaseViewProps} from "dyna-showcase/dist/interfaces";

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
        <DynaButton
          onClick={() => console.log('button pressed')}
        >dyna button</DynaButton>
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
          } as IDynaButtonProps
        },
        {
          slug: 'medium',
          title: 'medium',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.MEDIUM,
          } as IDynaButtonProps
        },
        {
          slug: 'large',
          title: 'large',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.LARGE,
          } as IDynaButtonProps
        },
        {
          slug: 'x-large',
          title: 'x-large',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.XLARGE,
          } as IDynaButtonProps
        },
      ]
    },
    {
	    slug: 'all-together',
      faIconName: 'flask',
	    title: 'style color and size',
      center: true,
      component: (
        <DynaButton
          onClick={() => console.log('button pressed')}
        >dyna button</DynaButton>
      ),
      wrapperStyle:{
      },
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
                } as IDynaButtonProps,
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
