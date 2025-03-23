/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start, end) {
    let pivot, mid;
    
    // find midpoint
    pivot = mid = Math.floor((start+end)/2);

    // sort start, mid, and end where mid is the median
    // pivot is also now the median
    medianOfThree(arr, start, mid, end);
    
    // swap pivot to end
    swap(arr, pivot, end);
    pivot = end;

    // excludes end because that is the pivot
    let i = start; // index of partition end where values are less than pivot
    for (let j = start; j < end; j++) {
        // if current ele is less than pivot, swap, and move the parition index
        if (arr[j] < arr[pivot]) {
            swap(arr, i, j);
            i++;
        }

    }    

    // swap the pivot with the first element that is not less than it (ie, the partition index)
    swap(arr, pivot, i);
    pivot = i;

    return pivot;
}

// i just went ahead and tried to implement median of three
function medianOfThree(arr, a, b, c) {
    // just swap the elements if subarray is less than 3 length
    // ie, if the distance between the two indices is 0 or 1
    if (c - a <= 1) {
        swap(arr, a, c);
        return arr;
    }

    if (arr[c] < arr[a]) {
        swap(arr, a, c);
    }
    if (arr[b] < arr[a]) {
        swap(arr, b, a);

    }
    if (arr[c] < arr[b]) {
        swap(arr, c, b);
    }
    return arr;
}

function swap(arr, a, b) {
    let t;
    t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, l = 0, r = arr.length - 1) {
    // once the l and r values become equal (ie, sub array size 1), exit the recursion
    if (l < r) {
        // call pivot function then recurse through each side of the array
        let p = pivot(arr, l, r);
        quickSort(arr, l, p - 1);
        quickSort(arr, p + 1, r);
    }
}

let arr = [98, 2, -3, 99, -120, 123123];
console.log(arr);
quickSort(arr)
console.log(arr);

module.exports = {pivot, quickSort};