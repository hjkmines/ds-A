class Vehicle {
    // defines all the properties of a car 
    constructor(color, price, brand, weight) {
        this.color = color;
        this.price = price; 
        this.brand = brand; 
        this.weight = weight
    }

    drive() {
        console.log('im driving!')
    }

    stop() {
        console.log('im stopping!')
    }
}

// instances
const toyota = new Vehicle('red', 4000, 'toyota', 6000)
const mazda = new Vehicle('black', 2000, 'mazda', 2000)

console.log(toyota.drive())

class Scooter extends Vehicle {
    constructor(color, size) {
        super(color)
        this.size = size 
    }

    runPeopleOverOver() {
        console.log('running people over!')
    }
}

const yamaha = new Scooter('green', 'medium')

console.log(yamaha.drive())