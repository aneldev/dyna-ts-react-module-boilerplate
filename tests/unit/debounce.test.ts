import {debounce} from "../../src/debounce";

const delay = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms));

describe('Debounce', () => {
  test('No debounce when is undefined', async () => {
    let counter = 0;
    let addCounter = (): void => {
      counter += 1;
    };
    const testCount = 50;
    const timeout = undefined;
    addCounter = debounce(addCounter, timeout);

    Array(testCount).fill(null)
      .forEach(addCounter);

    await delay(10);
    expect(counter).toBeGreaterThanOrEqual(1);
  });

  test('No debounce when is 0', async () => {
    let counter = 0;
    let addCounter = (): void => {
      counter += 1;
    };
    const testCount = 50;
    const timeout = 0;
    addCounter = debounce(addCounter, timeout);

    Array(testCount).fill(null)
      .forEach((v, index) => {
        v; // 4TS
        setTimeout(addCounter, index * timeout * 10);
      });

    await delay(10);
    expect(counter).toBeGreaterThanOrEqual(1);
  });

  test('No debounce when is 1', async () => {
    let counter = 0;
    let addCounter = (): void => {
      counter += 1;
    };
    const testCount = 50;
    const timeout = 1;
    addCounter = debounce(addCounter, timeout);

    Array(testCount).fill(null)
      .forEach((v, index) => {
        v; // 4TS
        setTimeout(addCounter, index * timeout * 10);
      });

    await delay((testCount * timeout * 10) + 100);
    expect(counter).toBe(testCount);
  });

  test('It debounce when is needed', async () => {
    let counter = 0;
    let addCounter = (value: number): void => {
      counter += value;
    };
    addCounter = debounce(addCounter, 100);

    addCounter(1);
    await delay(120);
    addCounter(1);

    expect(counter).toBe(2);
  });

  test('It debounces', async () => {
    let counter = 0;
    let addCounter = (value: number): void => {
      counter += value;
    };
    addCounter = debounce(addCounter, 100);

    addCounter(2);
    addCounter(3);
    addCounter(4);
    await delay(120);
    addCounter(5);

    expect(counter).toBe(2 + 4 + 5);
  });

  test('It debounces in an row', async () => {
    let counter = 0;
    let addCounter = (value: number): void => {
      counter += value;
    };
    addCounter = debounce(addCounter, 100);

    addCounter(2);
    addCounter(3);
    addCounter(4);
    await delay(110);
    addCounter(5);
    addCounter(6);
    addCounter(7);
    await delay(110);

    expect(counter).toBe(2 + 4 + 5 + 7);
  });
});
