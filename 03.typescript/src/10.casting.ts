let casting_eg: unknown = 'hello';

console.log((casting_eg as string).length); // 5
console.log((<string>casting_eg).length); // 5

// Force casting
console.log(((casting_eg as unknown) as Text).length); // 5
