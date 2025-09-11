const getMinNumber = (arr) => {
    let min = arr[0];
    for (const num of arr) {
        if (num < min) min = num;
    }
    return min;
};

console.log(getMinNumber([15, -3, 42, 7, 0]));