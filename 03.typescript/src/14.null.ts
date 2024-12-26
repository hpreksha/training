interface User {
    name: string;
    address?: {
        street?: string;
        city?: string;
    };
}

const user: User = {
    name: "John",
    address: {
        street: "123 Main St"
    }
};

// Optional Chaining
const street = user.address?.street;
console.log(street); // Output: "123 Main St"

// Nullish Coalescence
const city = user.address?.city ?? "Unknown City";
console.log(city); // Output: "Unknown City"

// Null Assertion
const streetNonNull = user.address!.street;
console.log(streetNonNull); // Output: "123 Main St"