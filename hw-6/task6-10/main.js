const suits = ['spade','diamond','heart','clubs'];
const values =['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let deck =[];

for (let suit of suits) {
    for (let value of values) {
        let color;
        if (suit ==='diamond' || suit === 'heart'){
            color = 'red';
        }
        else{
            color = "black";
        }
        deck.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    }
}

console.log(deck);
console.log('Кількість карт у колоді:', deck.length);

let spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value ==='ace');
console.log('Піковий туз', spadeAce);

let sixes = deck.filter(card => card.value === '6');
console.log( 'Всі шістки:', sixes);

let redCards = deck.filter(card => card.color === 'red');
console.log('Червоні карти:', redCards);

let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('Всі буби:', diamonds);

let clubsFromNine = deck.filter(card =>
    card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
);
console.log('Трефи від 9 і вище:', clubsFromNine);
