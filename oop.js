class Car {
    constructor(model, price, color) {
        this.model = model; 
        this.price = price; 
        this.color = color; 
    } 

    drive() {
        console.log('Im driving')
    }
}

const lexus = new Car('LS250', '$55000', 'black')

console.log(lexus.model)



