import * as React from 'react';
import PlainButton, {EButtonType} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

require('./showcase.less');

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
          <h3>dyna ts</h3>
          <h4>react module boilerplate</h4>
          <p>An easy way to develop react modules / components in typescript.</p>
        </div>
      ),
    },
    {
      slug: 'plain-button',
      faIconName: 'flask',
      title: 'plain button',
      description: 'The use plain button',
      center: true,
      component: (
        <PlainButton
          buttonType={EButtonType.OTHER}
          caption="plain"
          onClick={() => console.log('plain button pressed')}
        />
      ),
      props: [
        {
          slug: 'pain',
          title: 'plain button',
        },
        {
          slug: 'prev',
          title: 'previous button',
          props: {
            caption: <span>{faIcon('chevron-circle-left')} previous</span>
          }
        },
        {
          slug: 'next',
          title: 'next button',
          props: {
            caption: <span>next {faIcon('chevron-circle-right')}</span>
          }
        },
      ]
    },
    {
      slug: 'ok-button',
      faIconName: 'flask',
      title: 'ok button',
      description: 'The use of plain button as Ok button',
      center: true,
      component: (
        <PlainButton
          buttonType={EButtonType.OK}
          caption="Ok"
          onClick={() => console.log('ok button pressed')}
        />
      ),
    },
    {
      slug: 'cancel-button',
      faIconName: 'flask',
      title: 'cancel button',
      description: 'The use of plain button as Cancel button',
      center: true,
      component: (
        <PlainButton
          buttonType={EButtonType.CANCEL}
          caption="Cancel"
          onClick={() => console.log('cancel button pressed')}
        />
      ),
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
            <p><a href="https://github.com/aneldev/dyna-ts-react-module-boilerplate">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ts-react-module-boilerplate">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
