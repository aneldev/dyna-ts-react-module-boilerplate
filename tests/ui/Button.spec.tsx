import "jest";

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import * as React from 'react';
import * as enzyme from 'enzyme';

import {Button} from '../../src/Button';

describe('Button', () => {
  let wrapper;

  test('with minimal props', () => {
    wrapper = enzyme.shallow(
      (
        <Button onClick={() => console.log('I am clicked')}>My button</Button>
      ),
      {},
    );

    expect(wrapper).toMatchSnapshot();
  });
});
