import * as React from "react";
import * as enzyme from "enzyme";

// @ts-ignore
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new Adapter() });

import {Button} from '../../src/Button';

describe('Button', () => {
  let wrapper;

  test('swallow with minimal props', () => {
    wrapper = enzyme.shallow(
      (
        <Button onClick={() => console.log('I am clicked')}>My button</Button>
      ),
      {},
    );

    expect(wrapper).toMatchSnapshot();
  });
  test('mount with minimal props', () => {
    wrapper = enzyme.mount(
      (
        <Button onClick={() => console.log('I am clicked')}>My button</Button>
      ),
      {},
    );

    expect(wrapper).toMatchSnapshot();
  });
});
