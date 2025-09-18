const suits = ['spades','diamonds','hearts','clubs'];
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
const cardsBySuits = deck.reduce((grouped, card) => {
    grouped[card.cardSuit] = grouped[card.cardSuit].concat(card);
    return grouped;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(cardsBySuits);