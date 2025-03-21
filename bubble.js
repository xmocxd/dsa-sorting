function bubbleSort(array) {
    let len = array.length;
    let swapped = false;
    for (let i = len; i >= 0; i--) {
        swapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let n = array[j];
                array[j] = array[j + 1];
                array[j + 1] = n;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return array;
}

console.log('[5,3,2,2,6,5,76,124,123123,0,-1]\n' + bubbleSort([5,3,2,2,6,5,76,124,123123,0,-1]));

module.exports = bubbleSort;