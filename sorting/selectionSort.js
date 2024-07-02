function selectionSort(arr) {
    let len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      // Assume the minimum is the first element of the unsorted part
      let minIndex = i;
  
      // Check the rest of the array to find the true minimum element
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // If the minimum element is not the position i, swap it
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

        // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
      }
    }
  
    return arr;
  }
  
  // Example usage:
  let array = [64, 25, 12, 22, 11];
  let sortedArray = selectionSort(array);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 64]

  // time complexity = O(n^2)
  // space complexity = O(1)
  