import * as React from 'react';
import * as enzyme from 'enzyme';

import ComponentToTest from './..';

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      <ComponentToTest caption="ok" onClick={() => console.log('I am clicked')}/>,
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
