class Device {
    constructor(name, power, powered) {
        this.name = name
        this.power = power
        this.powered = false
    }

    poweredOn() {
        console.log("The device named", this.name + " works now!")
        this.powered = true
    }

    poweredOff() {
        console.log(this.name + " turned off!")
        this.powered = false
        this.power = "0 kw/h (turned off)"
    };
}

class Lamp extends Device{
    constructor(name,brand,power,type) {
        super(name,power);
        this.brand = brand
        this.type = type
        this.powered = false
    }

}
class Computer extends Device {
    constructor(name, brand, power, type, gaming) {
        super(name, power);
        this.brand = brand
        this.type = type
        this.gaming = true
        this.powered = false
    }
}

const tableLamp = new Lamp("Svetlyachok","BBK","0,1 kw/h","halogen");
const myPC = new Computer("Bob's PC","noname","1,4 kw/h","desktop",true);

myPC.poweredOn()
tableLamp.poweredOn()
console.log(myPC)
console.log(tableLamp)


