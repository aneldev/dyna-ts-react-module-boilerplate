import {render} from '@testing-library/react';
import {Label} from "../Label";

describe('Label', () => {
  it('renders with minimal props', () => {
    const {asFragment} = render(<Label>Customers</Label>);
    expect(asFragment()).toMatchSnapshot();
  });
});
