let day = +prompt('Введіть число від 1 до 31:');

if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада');
}