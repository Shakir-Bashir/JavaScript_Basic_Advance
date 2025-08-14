'use strict'



// constructor functions should always start with captial letter it is a convention
// arrow function will not work as a function constructor becoz the arrow function has not its own this keyword


const Person = function(firstName, birthYear) {
    console.log(this)
    this.firstName = firstName;
    this.birthYear = birthYear

    // Never do this 
    // this.calAge = function() {
    //     console.log(2037 - birthYear)
    // }
}




// here it will return the newly created obj so we stored that obj into a variable
const shakir =  new Person('Shakir', 2007)
console.log(shakir)


// 1. new {} is created
// 2. func. is called, this keyword is set to the newly created obj
// 3.  {} linked to prototype
// 4. func  automatically returned {}


const ahsan = new Person('Ahsan', 2009);
const jack = new Person('Jack',1975)
console.log(ahsan, jack)

console.log(shakir instanceof Person)


// Prototypes

/* Every obj created by a certain constructor function will get access to all the methods and properties that we define on the constructor prototype property */

/* All the objects that are created with the Person constructor function will inherit so they will get access to all the methods and properties that are defined on this prototype property*/
console.log(Person.prototype)

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear)
}

shakir.calcAge()
jack.calcAge();

console.log(shakir.__proto__)

/*The Person constructor function  has  a (prototype property)  which is an obj and inside that obj we define the calcAge method & Person.prototype itself actually also has a reference back to the person which is the constructor property*/
// 1. Person dot prototype dot constructor is gonna back to person itself
// 2. Person.prototype is actually not the prototype of person but of all the objects that are created through the person function


const Car = function(make, speed) {
    this.make = make;
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed +=10
    console.log(`${this.make} speed is ${this.speed}` )
}

Car.prototype.brake= function () {
    this.speed -=5
    console.log(`${this.make} speed is ${this.speed}` )

}

const BMW = new Car('Bmw', 120);
const Thar = new Car('Thar', 95)

// BMW.accelerate()
// Thar.accelerate()

BMW.brake()
Thar.brake()

// works same it it a synthetic sugar on function constructor
//ES6 Classes
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // this will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear)
    }
}

const mahi = new PersonCl('Mahi', 1987)
console.log(mahi);
// 1.classes are not hoisted
// 2. classes are first-class citizens // we can pass them in funcs and also we can return them from funcs
// 3. classes are executed in strict mode

// INORDER TO ADD STATIC METHODS TO THE CLASS WE USE THE (static word) what they does it they are only available by that class but not by the instances of that class (instances are the objects created with the newkeyword from the blueprint which we can call classes or constructor)


// Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    }
}

// Now it will be linked to the PersonProto object which will be its prototype 
const steven = Object.create(PersonProto)
steven.firstName = 'Steven';
steven.birthYear = 2000;
steven.calcAge()

console.log(steven.__proto__)


// INHERITANCE BETWEEN CLASSES (CONSTRUCTOR FUNCTIONS)


const Person1 = function(firstName, birthYear) {
    console.log(this)
    this.firstName = firstName;
    this.birthYear = birthYear
}

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course
}

// Linking Prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and  I am studying ${this.course}`)
}

const mike = new Student ("Mike", 2004, 'Computer Science')
mike.introduce()

//Inheritence between  classes. Object.Create
const PersonProto1 = {
    calcAge() {
        console.log(2037 - birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven1 = Object.create(Person)
// Here we set the studentProto also to the PersonProto1 now what it does it student inherits from the person
const studentProto = Object.create(PersonProto1)
const jay = Object.create(studentProto)


// Classes 
// Encapsulation
  // 1. Public fields
  // 2. Private fields
  // 3. Public methods
  // 4. Private methods

class Account {
    local = navigator.language;
    bank ='Bankist';
    #movement = []
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.movements = [];
        // this.local = navigator.language;


        console.log(`Thanks for opening an account ${owner}`)
    }
    #approveLoan(val) {
        return true
    }

    requestLoan(val) {
        if(this.#approveLoan(val)){
            this.deposit(val)
            console.log(`loan approved`)
        }
    }

    deposit(val) {
        this.#movement.push(val)
    }

    withdraw(val){
        this.deposit(-val)
    }
}

const acc1 = new Account ('shakir', 'INR', 1111)
acc1.deposit(250)
acc1.withdraw(200)

console.log(acc1)
