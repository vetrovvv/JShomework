function Device(name,power) {
    this.name = name
    this.power = power
    this.powered = false

}

Device.prototype.poweredOn = function (){
        console.log("The device named",this.name + " works now!")
        this.powered = true
};

Device.prototype.poweredOff = function (){
    console.log(this.name + " turned off!")
    this.powered = false
    this.power = "0 kw/h (turned off)"
};

function Lamp(name,brand,power,type){
    this.name = name
    this.brand = brand
    this.power = power
    this.type = type
    this.powered = true
}
Lamp.prototype = new Device();
function Computer(name, brand, power, type,gaming) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.gaming = gaming
    this.powered = true;
}

Computer.prototype = new Device();

const tableLamp = new Lamp("Svetlyachok","BBK","0,1 kw/h","halogen");
const myPC = new Computer("Bob's PC","noname","1,4 kw/h","desktop",true);

myPC.poweredOff()
tableLamp.poweredOff()
console.log(myPC)
console.log(tableLamp)


