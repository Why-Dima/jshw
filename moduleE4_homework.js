// 1 task

function output(keyvalue){
    for (let key in keyvalue) {

        if (keyvalue.hasOwnProperty(key)) {
    
            console.log(key, keyvalue[key])
        }   
    }
}

const args = { hello: 'world', world: 'hello'}

output(args)

// 2 task

function outputTrueFalse(str, dict){
    console.log(str in dict)
}

outputTrueFalse('a', args)
outputTrueFalse('hello', args)

// 3 task

function emptyObj(obj){
    var obj = new Object();
    console.log(obj)
}


emptyObj('hello')

// 4-5 task

class ElectricalAppliance{
    constructor(name,){
        this.name = name;
    }

    getInfo(){
        return `The name of electrical equipment - ${this.name}`
    }

    getTurn = function(enabledisable){
        return `The ${this.name} is switched ${enabledisable}`
    }
}


class PC extends ElectricalAppliance{
    constructor(name, cpu){
        super(name);
        this.cpu = cpu;
    }

    getInfo(){
        return `The name of PC - ${this.name} with ${this.cpu} cpu`
    }

    getTurn = function(enabledisable){
        return `The ${this.name} is switched ${enabledisable}`
    }

}


class Phone extends ElectricalAppliance{
    constructor(name, battery){
        super(name);
        this.battery = battery;
    }

    getInfo(){
        return `The name of phone - ${this.name} with ${this.battery} mAh battery`
    }

    getTurn = function(enabledisable){
        return `The ${this.name} is switched ${enabledisable}`
    }
}


const pc = new PC("hp", "intel");
console.log(pc.getInfo());
console.log(pc.getTurn('"on"'))

const phone = new Phone("samsung", "3000");
console.log(phone.getInfo());
console.log(phone.getTurn('"off"'))
