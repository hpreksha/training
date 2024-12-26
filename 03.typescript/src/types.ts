// File Contents : Types in javascript and type script : number,string,boolean,null,undefined,object
//               : Types added in typescript : any, unknown, never, enum, tuple 


let x: number = 2;
x= 2_2;
console.log(x);
let y; //type: any
y=1;
y='str';

let firstName: string = "Dylan";
let fname = "Dylan";

const json = JSON.parse("55");
console.log(typeof json);

let any_eg: any = true;
any_eg = "string"; //No error as any_eg is of type any.


let age:number=20;
if(age < 20) {
    age+=2;
}