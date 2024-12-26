"use strict";
class Class_eg {
    constructor() {
        this.id = 1;
        this.name = "p";
    }
    func() {
        throw new Error("Method not implemented.");
    }
}
class Person_eg {
    constructor(name1) {
        this.name1 = name1;
    }
    getName() {
        return this.name1;
    }
}
const person = new Person_eg("Jane");
console.log(person.getName());
