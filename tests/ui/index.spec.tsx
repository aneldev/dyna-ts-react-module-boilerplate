import {render} from '@testing-library/react';

describe('React', () => {
  it('has expected content with deep render', () => {
    const {asFragment} = render(<div/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
