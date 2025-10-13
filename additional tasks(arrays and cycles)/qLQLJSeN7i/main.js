let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. while – перебір масиву
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// 2. перебір масиву за допомогою for

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 3. while – непарний індекс
i = 0;
while (i < arr.length) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
    i++;
}

// 4. for – непарний індекс
for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 5. while – парні значення
i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i++;
}

// 6. for – парні значення
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7. замінити кратні 3 на "okten"
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = "okten";
    }
}
console.log(arr);

// 8. вивести у зворотньому порядку

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// 9.1 while – перебір масиву
i = arr.length - 1;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}

// 9.2 for – перебір масиву
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// 9.3 while – непарні індекси
i = arr.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
    i--;
}

// 9.4 for – непарні індекси
for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 9.5 while – парні значення
i = arr.length - 1;
while (i >= 0) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i--;
}

// 9.6 for – парні значення
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 9.7 замінити кратні 3 на "okten"
for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] === 'number' && arr[i] % 3 === 0) {
        arr[i] = "okten";
    }
}
console.log(arr);