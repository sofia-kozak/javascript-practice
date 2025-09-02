function foobar(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
        
    }
}
foobar([
    {id:1 , name:'olha', age: 34}
])