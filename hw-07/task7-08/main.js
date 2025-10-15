class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

const cinderellas = [
    new Cinderella('Anna', 19, 36),
    new Cinderella('Olena', 20, 37),
    new Cinderella('Ira', 22, 38),
    new Cinderella('Katya', 18, 35),
    new Cinderella('Marta', 21, 39),
    new Cinderella('Sofia', 23, 37),
    new Cinderella('Yulia', 24, 40),
    new Cinderella('Oksana', 25, 41),
    new Cinderella('Natalia', 20, 36),
    new Cinderella('Diana', 19, 39)
];

const prince = new Prince('Andrii', 25, 37);

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoe);
console.log(cinderellaMain);