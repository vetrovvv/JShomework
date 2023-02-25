class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

let topgamer = new Person("Михаил","22")
topgamer.gamer = true
topgamer.likeEnergyDrinks = true
topgamer.team = "MVP"

function allProperties(topgamer){
    return console.log(Object.entries(topgamer))
}

allProperties(topgamer)