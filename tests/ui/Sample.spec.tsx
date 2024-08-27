import { render } from "@testing-library/react";

describe('Sample UI test', () => {
  let wrapper;

  test('with minimal props', () => {
    expect(
      render(
        <div
          onClick={() => console.log('I am clicked')}
        >
          Demo empty div
        </div>
      )
    ).toMatchSnapshot();
  });
});
