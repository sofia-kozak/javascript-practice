function getMinNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let numbers = [15, -3, 42, 7, 0];
console.log(getMinNumber(numbers));