import "jest";

import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import * as React from 'react';
import * as enzyme from 'enzyme';

describe('Sample UI test', () => {
  let wrapper;

  test('with minimal props', () => {
    wrapper = enzyme.shallow(
      (
        <div onClick={() => console.log('I am clicked')}>Demo empty div</div>
      ),
      {},
    );

    expect(wrapper).toMatchSnapshot();
  });
});
