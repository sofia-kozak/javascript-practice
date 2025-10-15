function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(2, 'Oleh', 'Petrenko', 'oleh.petrenko@example.com', '+380931112244'),
    new User(7, 'Kateryna', 'Savchuk', 'kateryna.savchuk@example.com', '+380931112299'),
    new User(4, 'Taras', 'Hrytsenko', 'taras.hrytsenko@example.com', '+380931112266'),
    new User(3, 'Ira', 'Shevchenko', 'ira.shevchenko@example.com', '+380931112255'),
    new User(1, 'Anna', 'Koval', 'anna.koval@example.com', '+380931112233'),
    new User(5, 'Oksana', 'Melnyk', 'oksana.melnyk@example.com', '+380931112277'),
    new User(9, 'Olena', 'Krupa', 'olena.krupa@example.com', '+380931112233'),
    new User(8, 'Maksym', 'Tkachenko', 'maksym.tkachenko@example.com', '+380931112211'),
    new User(6, 'Andrii', 'Bondar', 'andrii.bondar@example.com', '+380931112288'),
    new User(10, 'Yurii', 'Kozak', 'yurii.kozak@example.com', '+380931112244'),
];


function sorter(user1, user2) {
    return user1.id - user2.id;
}

console.log(users.sort(sorter));