declare let describe:any, expect:any, it: any;
import Button from '../src/index';

// help: https://facebook.github.io/jest/docs/expect.html

describe('Button simple etst', () => {
	it('should load the button', () => {
		expect(Button).not.toBe(undefined);
	});
});
