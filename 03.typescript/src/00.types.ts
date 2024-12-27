// File Contents : Types in javascript and type script : number,string,boolean,null,undefined,object
//               : Types added in typescript : any, unknown, never, enum, tuple 


// ------------------------------------------------------------------------
let x: number = 2;
x= 2_2;
console.log(x); //22


// ------------------------------------------------------------------------
let firstName: string = "Dylan";
let fname = "Dylan";


// ------------------------------------------------------------------------
const json = JSON.parse("55");
console.log(typeof json); // number


// ------------------------------------------------------------------------
// any disables the type checking
let y; //type: any
y=1;
y='str';
let any_eg: any = true;
any_eg = "string"; //No error as any_eg is of type any.


// ------------------------------------------------------------------------
// unknown is similar to any but safer
// anything is assignable to unknown but unknown is not assignable to anything.
let unk_eg : unknown;
// let unk_assi_eg : number = unk_eg;  // Type 'unknown' is not assignable to type 'number'.
let assi_eg:number = 10;
unk_eg = assi_eg; // no error
// unk_eg = "1";


// ------------------------------------------------------------------------
let any_eg2 : any = 2;
any_eg2 = unk_eg
any_eg2 = "2";
any_eg2.toFixed(2);
// unk_eg.toFixed(2); // not allowed
JSON.stringify(unk_eg);


// ------------------------------------------------------------------------
// never denotes values that will never be encountered. suppose you construct a function that never returns or always throws an exception then we can use the never type on that function.
// let variable: void = null; 
// let variable1: never = null;      // error 
// let variable2: never = 1;         // error 
// let variable3: never = "geek";     // error 
// let variable4: never = true;  


// function greet() : never{ 
//     while (true) { 
//       console.log("hello"); 
//     } 
//   } 
// Function call 
//   greet();


// ------------------------------------------------------------------------
let q = null;
let w = null;
console.log(q === w); //true


// ------------------------------------------------------------------------
let qq;
let ww = undefined;
console.log(q === w); //true
// ------------------------------------------------------------------------