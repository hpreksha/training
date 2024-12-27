// File Contents : Arrays in typescript : Arrays are used to store multiple values in a single variable. TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array in typescript.


let arr: readonly number[] = [1, 2];
let numbers: (number | string)[] = [1, 2, '3']; // Allowing both numbers and strings
numbers.push(4); // This is fine since 4 is a number
let xx: any = numbers[0];
console.log(arr[1]); // 2
