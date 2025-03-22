function insertionSort(arr) {
    for (let p = 1; p < arr.length; p++) {
        for (let i = 0; i < p; i++) {
            if (arr[p] < arr[i]) {
                let t = arr[i];
                arr[i] = arr[p];
                arr[p] = t;
            }
        }
    }

    return arr;
}

console.log('[0,-1,99,2,4,77,22,-999]\n' + insertionSort([0,-1,99,2,4,77,22,-999]));

module.exports = insertionSort;