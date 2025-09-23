Array.prototype.myForEach = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
};

Array. prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
      result.push(this[i])
      }
    }
    return result;
};

const fruits=[
    { name: 'apple', color: 'red', weight: 150 },
    { name: 'banana', color: 'yellow', weight: 120 },
    { name: 'cherry', color: 'red', weight: 10 },
    { name: 'pear', color: 'green', weight: 160 },
    { name: 'grape', color: 'purple', weight: 5 }
];

fruits.myForEach(fruit => console.log(`Fruit: ${fruit.name}`));

const redFruits = fruits.myFilter(fruit => fruit.color === 'red');
console.log('Red fruits:', redFruits);

const heavyFruits = fruits.myFilter(fruit => fruit.weight > 100);
console.log('Heavy fruits:', heavyFruits);