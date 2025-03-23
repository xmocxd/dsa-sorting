const { pivot, quickSort } = require("./quick")

// modified the test to handle median of three
describe('pivot', function () {
  it('should exist', function () {
    expect(typeof pivot).toBe('function', "did you remember to define the 'pivot' function?");
  });

  it('should return the pivot index', function () {
    let arr = [5,1,2,3.123,4.5,66,55,-12];
    let p = pivot(arr, 0, arr.length - 1);
    expect(p).toBe(3, 'pivot index should be 3 for ' + arr);
    expect(arr[p]).toBe(3.123, 'pivot value should be 3.123 for ' + arr);
    
    arr = [88,649,-0.1,5,1,2.2,3,4,66,55,-12];
    p = pivot(arr, 0, arr.length - 1);
    expect(p).toBe(3, 'pivot index should be 3 for ' + arr);
    expect(arr[p]).toBe(2.2, 'pivot value should be 2.2 for ' + arr);
  });

  it('should mutate the array by placing values on either side of the pivot', function () {

  });
});

// modified the test to handle in place sorting version of the function
describe('quicksort', function () {
  it('should exist', function () {
    expect(typeof quickSort).toBe('function', "did you remember to define the 'quickSort' function?");
  });

  it('should sort numbers in ascending order', function () {
    let arr1, arr2;

    arr1 = arr2 = [4, 20, 12, 10, 7, 9];
    quickSort(arr2);

    expect(arr2).toEqual([4, 7, 9, 10, 12, 20],
      "quickSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 9, 10, 12, 20]"
    );

    arr1 = arr2 = [0, -10, 7, 4];
    quickSort(arr2);

    expect(arr2).toEqual(
      [-10, 0, 4, 7],
      "quickSort([0, -10, 7, 4]) should equal [-10, 0, 4, 7]"
    );
    
    arr1 = arr2 = [1, 2, 3];
    quickSort(arr2);

    expect(arr2).toEqual(
      [1, 2, 3],
      "quickSort([1, 2, 3]) should equal [1, 2, 3]"
    );
    
    arr1 = arr2 = [];
    quickSort(arr2);

    expect(arr2).toEqual(
      [],
      "quickSort([]) should be []"
    );
    
    arr1 = arr2 = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    quickSort(arr2);

    expect(arr2).toEqual(
      [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342],
      "quickSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]) should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]"
    );
  });
});
