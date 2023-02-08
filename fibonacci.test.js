const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.next()).toBe(13);
});

test('Using the next function from new', () => {
    //let nextValue = fibonacci.next();
    //expect(nextValue).toBe(1)
    expect(fibonacci.next()).toBe(1);
});

test('When initialized skip can be used', () => {
    fibonacci.init(2);
    expect(fibonacci.skip(4)).toBe(13);
});

test('Initialize from 0 should throw error', () => {
    expect(() => {
        fibonacci.init(0);
    }).toThrow();
});

test('Initialize from a non-Fib should throw error', () => {
    expect(() => {
        fibonacci.init(7);
    }).toThrow();
});

test('Skipping backwards should throw error', () => {
    fibonacci.init(8);
    expect(() => {
        fibonacci.skip(-3);
    }).toThrow();
});
// Would expect it to be 2 if skipping back was possible ; test failed so it's a DEFECT

test('New test - next next next', () => {
    fibonacci.next();
    fibonacci.next();
    fibonacci.next();
    fibonacci.next();
    fibonacci.next();
    expect(fibonacci.next()).toBe(13);
});

test('When initialised, skip will jump to specified XL number', () => {
    fibonacci.init(8);
    expect(fibonacci.skip(20)).toBe(121393);
})