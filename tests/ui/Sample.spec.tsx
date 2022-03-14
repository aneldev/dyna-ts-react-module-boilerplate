import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as React from 'react';
import * as enzyme from 'enzyme';

configure({adapter: new Adapter()});

describe('Sample UI test', () => {
  let wrapper;

  test('with minimal props', () => {
    wrapper = enzyme.shallow(
      (
        <div
          onClick={() => console.log('I am clicked')}
        >
          Demo empty div
        </div>
      ),
      {},
    );

    expect(wrapper).toMatchSnapshot();
  });
});
