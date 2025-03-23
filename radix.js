function radixSort(arr) {
    let max = mostDigits(arr);
    let counts = Array.from({length: 10}, () => []);

    for (i = 0; i < max; i++) {
        while (arr.length > 0) {
            last = arr[arr.length - 1];
            let d = getDigit(last, i);
            counts[d].push(last);
            arr.pop();
        }
        for (x = 0; x < 10; x++) {
            while (counts[x].length > 0) {
                arr.push(counts[x].pop());
            }
        }
    }
}

function digitCount(n) {
    if (!Number.isInteger(n) || n < 0) throw new Error("Array must contain positive integers only");
    return Math.floor(Math.log10(n)) + 1;
}

function mostDigits(arr) {
    let most = 0;
    for (i = 0; i < arr.length; i++) {
        let d = digitCount(arr[i]);
        if (d > most) most = d;
    }
    return most;
}


function getDigit(n, digit) {
    return Math.floor((n / Math.pow(10, digit)) % 10);
}

let arr = [1337, 102, 33, 145, 430, 225, 17, 122, 24, 25];
console.log(":" + arr);
radixSort(arr);
console.log(":" + arr);

module.exports = { getDigit, digitCount, mostDigits, radixSort };