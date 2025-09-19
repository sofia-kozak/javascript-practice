function Client(id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;

}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let clients = [
    new Client(1, 'Sofiia', 'Kozak', 'sofiia.kozak@example.com', '+380931112233',
        new Product('tv', 13000),
        new Product('phone', 9876)
    ),
    new Client(2, 'Denys', 'Martynenko', 'denys.m@example.com', '+380931112244',
        new Product('laptop', 30000)
    ),
    new Client(3, 'Mariya', 'Lytvyn', 'mariya.l@example.com', '+380931112255',
        new Product('fridge', 25000),
        new Product('microwave', 8000)
    ),
    new Client(4, 'Bohdan', 'Kravets', 'bohdan.k@example.com', '+380931112266',
        new Product('sofa', 12000)
    ),
    new Client(5, 'Yuliia', 'Horbach', 'yuliia.h@example.com', '+380931112277',
        new Product('tv', 18000),
        new Product('soundbar', 3500)
    ),
    new Client(6, 'Volodymyr', 'Hnatyuk', 'volodymyr.h@example.com', '+380931112288',
        new Product('phone', 22000),
        new Product('headphones', 3500),
        new Product('camera', 15000),
        new Product('tripod', 2500)
    ),
    new Client(7, 'Natalia', 'Stadnyk', 'natalia.s@example.com', '+380931112299',
        new Product('washing machine', 17000)
    ),
    new Client(8, 'Serhii', 'Yakymenko', 'serhii.y@example.com', '+380931112211',
        new Product('camera', 15000),
        new Product('tripod', 2500)
    ),
    new Client(9, 'Iryna', 'Polishchuk', 'iryna.p@example.com', '+380931112233',
        new Product('microwave', 8000)
    ),
    new Client(10, 'Roman', 'Danylko', 'roman.d@example.com', '+380931112244',
        new Product('stove', 20000),
        new Product('kettle', 2000),
        new Product('washing machine', 17000)
    )
];

const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);
