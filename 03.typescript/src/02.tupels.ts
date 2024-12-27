let tuple_eg: [number, string]=[1,'2'];
tuple_eg.push(1); // can be added like this but not like this [1,'2',4];
tuple_eg.pop();
console.log(tuple_eg); // [1,'2']

// Destructuring tuples
const [x1,y1]=tuple_eg;

// Named tupels can't use x and y to get elements
const graph: [x: number, y: number] = [55.2, 41.3];
