//Section-1: Objects and oops thinking foundation

//create a user objects that stores name and email and has a login method
//Then convert the same logic using a class and observe how the codes becomes cleaner


class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log("user loged in")
    }
}

let user1 = new User("Anand","anand@h.com");
let user2 = new User("Anamika","anamika69@h.in");



//Create a product object that stores name and price and has a method which returns the final price after discount

let product = {
    name: "Nvidia RTX-4060",
    price: 30000,
    final_price: function (){
        let discount = 5/100;
        let finalPrice = this.price - (this.price * discount);
        console.log(`final price after discount is ${finalPrice}`)
    }
}

// product.final_price();


//Section-2: Classes and Objects
// create a car class with the following
// Brand and Speed
// A drive method that prints the car brand and speed
//Create two different car objects from the same class and verify that their data is different

class Car {
    constructor(brand,speed) {
        this.brand = brand
        this.speed = speed
    }
    drive() {
        console.log(`Brand is ${this.brand} and Speed of this car is ${this.speed}`)
    }
}

let bmw = new Car("BMW","300kmph");
let mercedes = new Car("Mercedes-Benz","250kmph")
let porsche = new Car("Porsche","300kmph") 


//Create a student class whose constructor accepts name and roll number
//add a method introduce that prints both values

class Student {
    constructor(name, roll) {
        this.name = name
        this.roll = roll
    }
    introduce(){
        console.log(`${this.name} - ${this.roll}`)
    }
}

let stud1 = new Student("Rahul",1163)

// stud1.introduce();



//Constructor Function and Prototypes
//Create a user constructor function (do not use class syntax)
//Add a login method in two ways:
//first inside the constructor 
//then move the method to the prototypes

function Human (){
    this.name = "Harshita"
}

let human1  = new Human();


//Create a function that prints this.name

function abcd(){
    console.log(this.name)
}

let obj = {
    name: "Raima"
}

// abcd.call(obj)