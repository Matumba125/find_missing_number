const find_missing = require('./find_missing')

describe('missingNumber', () => {

    test('Task Case 1', () => {
        expect(find_missing.missingNumber([5, 0, 1, 3, 2])).toBe(4);
    });

    test('Task Case 2', () => {
        expect(find_missing.missingNumber([7, 9, 10, 11, 12])).toBe(8);
    });

    test('Array with missing number in the middle', () => {
        expect(find_missing.missingNumber([0, 1, 3, 4])).toBe(2);
    });

    test('Array with missing number at the end', () => {
        expect(find_missing.missingNumber([0, 1, 2, 3])).toBe(4);
    });

    test('Array without missing numbers', () => {
        expect(find_missing.missingNumber([0, 1, 2, 3, 4])).toBe(5);
    });

    test('Empty array', () => {
        expect(find_missing.missingNumber([])).toBe(0);
    });

    test('Array with one element', () => {
        expect(find_missing.missingNumber([0])).toBe(1);
    });

    test('Array with negative numbers and zero', () => {
        expect(find_missing.missingNumber([-3, -2, 0, 1, 2])).toBe(-1);
    });

    test('Array with negative numbers only', () => {
        expect(find_missing.missingNumber([-3, -2, -1])).toBe(0);
    });

    test('Array with positive numbers only', () => {
        expect(find_missing.missingNumber([1, 2, 3])).toBe(4);
    });

    test('Array with large numbers', () => {
        expect(find_missing.missingNumber([1000000, 1000001, 1000003])).toBe(1000002);
    });
});