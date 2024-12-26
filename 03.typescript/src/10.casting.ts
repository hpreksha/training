let casting_eg: unknown = 'hello';

console.log((casting_eg as string).length);
console.log((<string>casting_eg).length);

// Force casting
console.log(((casting_eg as unknown) as Text).length);
