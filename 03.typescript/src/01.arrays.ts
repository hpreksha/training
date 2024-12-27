let arr: readonly number[] = [1, 2];
let numbers: (number | string)[] = [1, 2, '3']; // Allowing both numbers and strings
numbers.push(4); // This is fine since 4 is a number
let xx: any = numbers[0];
console.log(arr[1]); // 2
