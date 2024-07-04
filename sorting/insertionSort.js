function insertionSort(arr) {
    let len = arr.length;

    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key ) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;

}

// Example usage:
let array = [64, 25, 12, 22, 11];
let sortedArray = insertionSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]

// best time complexity = O(n)
// worst time complexity = O(n^2)
// average time complexity = O(n^2)
// space complexity = O(1)
