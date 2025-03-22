// merge two sorted arrays
function merge(arr1, arr2) {
    let merged = [];
    let a = 0;
    let b = 0;

    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] <= arr2[b]) {
            merged.push(arr1[a]);
            a++;
        } else {
            merged.push(arr2[b]);
            b++;
        }
    }

    if (a >= arr1.length) {
        merged = merged.concat(arr2.slice(b));
    } else {
        merged = merged.concat(arr1.slice(a));
    }
    
    return merged;
}

// perform mergesort on an unsorted array
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let midpoint = Math.floor(arr.length / 2);
    let l = mergeSort(arr.slice(0, midpoint));
    let r = mergeSort(arr.slice(midpoint));

    return merge(l, r);
}

console.log('[0, -1, 100, 500, 250, 3]\n' + mergeSort([0, -1, 100, 500, 250, 3]));
console.log('[123,12555,1,-1,-1200,0,0,2,4,5,6,345,63,5,5]\n' + mergeSort([123,12555,1,-1,-1200,0,0,2,4,5,6,345,63,5,5]));

module.exports = {merge, mergeSort};