let day = +prompt('Enter the day (1-7):');

switch (day) {
    case 1:
        console.log('Monday – Team meeting, email review, sprint planning, English practice');
        break;
    case 2:
        console.log('Tuesday – Deep work: coding, gym in the evening, groceries');
        break;
    case 3:
        console.log('Wednesday – Project demo, code refactoring, online course');
        break;
    case 4:
        console.log('Thursday – Client call, write documentation, clean workspace');
        break;
    case 5:
        console.log('Friday – Finalize tasks, team retrospective, dinner with friends');
        break;
    case 6:
        console.log('Saturday – Laundry, Netflix, walk in the park, plan next week');
        break;
    case 7:
        console.log('Sunday – Sleep in, read a book, journal reflection, prep meals');
        break;
    default:
        console.log('?????');
}