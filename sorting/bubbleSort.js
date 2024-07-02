function bubbleSort(arr) {
    let len = arr.length;
  
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
        //   let temp = arr[j];
        //   arr[j] = arr[j + 1];
        //   arr[j + 1] = temp;

        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }
  
    return arr;
  }
  
  // Example usage:
  let array = [56,2,4,5,6,5];
  let sortedArray = bubbleSort(array);
  console.log(sortedArray)