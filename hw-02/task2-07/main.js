let time = +prompt('Введіть число від 0 до 59:');

if (time >= 0 && time <= 14) {
    console.log('1-ша чверть');
} else if (time >= 15 && time <= 29) {
    console.log('2-га чверть');
} else if (time >= 30 && time <= 44) {
    console.log('3-nя чверть');
} else if (time >= 45 && time <= 59) {
    console.log('4-та чверть ');
}