function selectionSort(arr) {
    for (let o = 0; o < arr.length; o++) {
        let min = o;
        for (let i = o + 1; i < arr.length; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }
        }

        if (min !== o) {
            let t = arr[o];
            arr[o] = arr[min];
            arr[min] = t;
        }
    }

    return arr;
}

console.log('[4, 20, 12, 10, 7, 9]\n' + selectionSort([4, 20, 12, 10, 7, 9]));

module.exports = selectionSort;