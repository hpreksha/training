// 1. Declaration Merging with Interface
interface Person {
  name: string;
  age: number;
}

// Declaring the same interface again will merge the properties.
interface Person {
  email: string;
}

const person1: Person = {
    name: "John",
    age: 30,
    email: "john@example.com",
};

// 2. Type with Union and Intersection
type Animal = {
  species: string;
};

type Bird = Animal & {
  canFly: boolean;
};

type Fish = Animal & {
  canSwim: boolean;
};

// Using Union types
type Pet = Bird | Fish; // Pet can either be a Bird or a Fish

const pet1: Pet = {
  species: "parrot",
  canFly: true,
};

const pet2: Pet = {
  species: "goldfish",
  canSwim: true,
};

// 3. Extending an Interface
interface Employee extends Person {
  jobTitle: string;
}

const employee: Employee = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    jobTitle: "Developer"
};

// 4. Extending a Type
type Vehicle = {
  wheels: number;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = {
  wheels: 4,
  model: "Tesla",
};

// 5. Using Type for Primitive Types and Mapped Types
type NumberOrString = number | string;  // Union type
type ReadOnlyPerson = Readonly<Person>;  // Mapped type to make all properties read-only

const numOrString: NumberOrString = "Hello";
const readOnlyPerson: ReadOnlyPerson = {
    name: "Bob",
    age: 40,
    email: "bob@example.com"
};
// readOnlyPerson.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property
