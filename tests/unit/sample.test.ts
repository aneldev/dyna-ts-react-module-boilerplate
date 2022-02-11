import "jest";

if (typeof jasmine !== 'undefined') jest.setTimeout(5000);

// Help: https://facebook.github.io/jest/docs/expect.html

describe('Sample unit test', () => {
  it('should import the component', () => {
    expect(1).toBe(1);
  });
});
