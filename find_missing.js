const missingNumber = (arr) => {
    arr.sort((a, b) => a - b);

    let expectedValue = arr[0] || 0;

    for (let num of arr) {
        if (num !== expectedValue) {
            return expectedValue;
        }
        expectedValue++;
    }

    return expectedValue;
};

module.exports = {missingNumber}