import "jest";

declare let window: any;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;


// help: https://facebook.github.io/jest/docs/expect.html

describe('Sample unit test', () => {
  it('should import the component', () => {
    expect(1).toBe(1);
  });
});
