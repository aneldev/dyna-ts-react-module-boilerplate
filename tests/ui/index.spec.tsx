import "jest";

import * as React from 'react';
import * as enzyme from 'enzyme';

import {Button} from '../../src';

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      (
        <Button onClick={() => console.log('I am clicked')}>My button</Button>
      ),
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
