import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as React from 'react';
import * as enzyme from 'enzyme';

import {Button} from '../../src/Button';

configure({adapter: new Adapter()});

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
