// File Content: Javascript objects examples
// Creating an object using object literal syntax
const person = {
    name: 'John',
    age: 30,
    isEmployed: true
};
console.log(person);  // { name: 'John', age: 30, isEmployed: true }



// Accessing properties=
console.log(person.name);  // John
console.log(person['age']);  // 30

person.age = 31;
console.log(person.age);  // 31

person.city = 'New York';
console.log(person);  // { name: 'John', age: 31, isEmployed: true, city: 'New York' }



// Objects can contain other objects
const user = {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Wonderland',
        zip: '12345'
    }
};
console.log(user.address.city);  // Wonderland



// Objects can have methods (functions as properties)
// The `this` keyword refers to the object that is executing the current function
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    getCarInfo: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log(car.getCarInfo());  // 2020 Toyota Corolla




// An object constructor function is used to create multiple instances of similar objects
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    };
}
const person1 = new Person('John', 20);
const person2 = new Person('Josh', 21);
person1.greet();  // Hi, I'm Sarah and I'm 28 years old.
person2.greet();  // Hi, I'm Mike and I'm 32 years old.




// Object.create() allows us to create an object that inherits from another object
const animal = {
    species: 'Mammal',
    sound: 'Roar',
    makeSound: function() {
        console.log(this.sound);
    }
};

const lion = Object.create(animal);
lion.sound = 'Growl';
lion.makeSound();  // Growl



// Destructuring allows us to extract properties from objects into variables
const { name, age, isEmployed } = person;
console.log(name);  // Emma



// The spread operator allows us to create a shallow copy of an object
const originalObject = {
    a: 1,
    b: 2
};

const copiedObject = { ...originalObject };
copiedObject.a = 3;

console.log(originalObject.a);  // 1
console.log(copiedObject.a);    // 3



// Object.assign() can be used to copy properties from one or more objects to a target object
const target = { name: 'Tom' };
const source = { age: 40, city: 'London' };
Object.assign(target, source);
source.age = 50;
console.log(target);  // { name: 'Tom', age: 40, city: 'London' }



// Object.keys() returns an array of the object's keys
const keys = Object.keys(person);
console.log(keys);  // ['name', 'age', 'isEmployed']

// Object.values() returns an array of the object's values
const values = Object.values(person);
console.log(values);  // ['John', 31, true]

// Object.entries() returns an array of the object's key-value pairs
const entries = Object.entries(person);
console.log(entries);  // [['name', 'John'], ['age', 31], ['isEmployed', true]]




// Object.freeze() prevents modification of object properties (makes it immutable)
const immutablePerson = Object.freeze({
    name: 'Steve',
    age: 45
});

immutablePerson.age = 50;  // This will not change the 'age' property
console.log(immutablePerson.age);  // 45

// Object.seal() prevents adding or deleting properties, but allows modifications
const sealedPerson = Object.seal({
    name: 'Rachel',
    age: 29
});

sealedPerson.name = 'Sophie';  // This will work
sealedPerson.city = 'Berlin';  // This will NOT work
console.log(sealedPerson);  // { name: 'Sophie', age: 29 }



// Symbols are unique identifiers that can be used as object property keys
const mySymbol = Symbol('id');
const advancedObject = {
    [mySymbol]: 'This is a symbol property',
    name: 'Anna'
};

console.log(advancedObject[mySymbol]);  // This is a symbol property



// Using classes in JavaScript to implement OOP concepts
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    introduce() {
        console.log(`Hi, I'm a ${this.species} and my name is ${this.name}.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    bark() {
        console.log('Woof!');
    }
}

const myDog = new Dog('Max', 'Golden Retriever');
myDog.introduce();  // Hi, I'm a Dog and my name is Max.
myDog.bark();       // Woof!

