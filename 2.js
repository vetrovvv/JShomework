let property = prompt("Введите свойство для поиска в объекте:")
    class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

let topgamer = new Person("Михаил","22")
topgamer.gamer = true



function checkProperty(property,topgamer) {
    return alert(topgamer.hasOwnProperty(property))
}

checkProperty(property,topgamer)