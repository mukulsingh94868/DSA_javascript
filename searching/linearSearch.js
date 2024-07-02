function linearSearch (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


let array = [5, 3, 8, 4, 2];
let target = 5;
let index = linearSearch(array, target);

console.log('index', index);