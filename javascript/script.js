// Functions
function func() {
  console.log("Function");
}

var x2 = function func2() {
  let car = "car";
  console.log("Function expression");
  return car;
};

// -------------------------------------------------------------------------
// Objects
// (- not allowed when using . but used if we use [] to access properties)
const car = {
  model: "911 gt3",
  company: "Porsche"
};
console.log(car.model);
console.log(car["company"]);

var obj = {
  fname: "John",
  sname: "Doe",
  ids: {
    eid: 1,
    cid: 2
  },
  fullName: function () {
    return this.fname + " " + this.sname;
  }
};

const arr = Object.values(obj);
const entries = Object.entries(obj);
console.log(entries);
document.getElementById("object").innerHTML = "Hello " + obj.fullName();

var obj2 = new Object();
obj2.fname = "John";
let obj_copy = obj2;
// change in obj_copy will make change in obj2 too.
delete obj2["fname"];

// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "<br>";
// }

let x = "";
const obj3 = {
  name: "John",
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] }
  ]
};

for (let i in obj3.cars) {
  x += "<h2>" + obj3.cars[i].name + "</h2>";
  for (let j in obj3.cars[i].models) {
    x += obj3.cars[i].models[j] + "<br>";
  }
}
document.getElementById("object-eg").innerHTML = x;

function Func_const(first, second) {
  this.first = first;
  this.second = second;
  this.disp = function () {
    console.log("Hello");
  };
}

func_obj = new Func_const("q", "w");
Func_const.prototype.third = "e";
console.log(func_obj);

const arr2 = [1, 2, 3, 4, 5];
document.getElementById("arr-eg").innerHTML = "Element greater than 4 is " + arr2.find(func) + ".";
function func(value) {
  return value > 4;
}

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const person2 = { firstName: "Anne", lastName: "Smith" };
Object.assign(person1, person2);
console.log(person1);
Object.defineProperty(person1, "year", { value: "2008" });
Object.preventExtensions(person2);
person2.q = "q";
console.log(person2.q);
Object.seal(person2);
delete person2.firstName;
Object.freeze(person2);
person2.firstName = "q";
console.log(person2);


// Call, Apply, Bind
let nameObj = {
  name: "Tony"
}

let PrintName = {
  name: "steve",
  sayHi: function () {

      // Here "this" points to nameObj
      console.log(this.name); 
  }
}

let HiFun = PrintName.sayHi.bind(nameObj); // new function created in bind this with first argument
PrintName.sayHi.call(nameObj, 42); // direct call
//PrintName.sayHi.MyApply(nameObj, [42]); //arguments can be passed as array.
HiFun();


// Destructuring
const {firstName, lastName} = person2;
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
// ----------------------------------------------------------------------------
// Sets

const s = new Set(["q", "w"]);
s.add("e");
let s_text = "";
for (const x of s) {
  s_text += x;
}
document.getElementById("set_eg").innerHTML = s_text;
console.log(s);

// -------------------------------------------------------------------------------------
// Maps
const mp = new Map([
  ["qw", 1],
  ["er", 2]
]);
mp.set("ty", 3);
console.log(mp);
document.getElementById("map_eg").innerHTML = mp.get("qw");

const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 }
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Map.groupBy(fruits, myCallback);
console.log(result);

//Callback and async
function display2(some) {
  console.log("Hello " + some);
}

function display(some) {
  console.log("Answer " + some);
}

function display3(some) {
  console.log("Answer1 " + some);
}

function myCalc(q, w, func, func1, func2) {
  let z = q + w;
  setTimeout(() => func2(z), 1000);
  setTimeout(() => func(z), 2000);
  func1(z);
}

myCalc(2, 2, display, display2, display3);

function welcomeUser(username) {
  console.log(`Welcome ${username}`);
}

function getName(callback) {
  let name;
  setTimeout(function () {
    name = "Jane";
    callback(name);
  }, 500);
}

getName(welcomeUser);

// Promises
let p = new Promise(function (myResolve, myReject) {
  let x = 0;
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

p.then(
  function (value) { display(value); },
  function (error) { display(error); }
);

// Async await
async function myFunction() {
  return await "hello";
}

myFunction().then(
  function (value) { console.log(value); },
  function (error) { console.log(error); }
);

function upperCase() {
  const x = document.getElementById("name");
  x.value = x.value.toUpperCase();
}

// ------------------------------------------------------------
// Strings
let txt = "qwertyuiop";
console.log(txt.charAt(0));
// or txt.at(0) or txt[0]
let slice_eg = txt.slice(2, 4);
console.log(slice_eg);
let substr_eg = txt.substr(2, 5);
console.log(substr_eg);
let r_eg = txt.replace(/qw/, "er");
console.log(r_eg);
console.log(txt);

// -------------------------------------------------------------
// Arrays
const arr_eg = ["q", "w"];
console.log(typeof arr_eg);
console.log(Array.isArray(arr_eg));
const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();
const newArr2 = newArr.flatMap(x => [x, x * 10]);
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);//doesn't change org arr
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");//change org arr
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);//doesn't change org arr

// Local Storage
localStorage.setItem("name", "John Doe");
localStorage.getItem("name");

// Session storage
sessionStorage.setItem("name", "John Doe");
sessionStorage.getItem("name");

// Cookies
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
document.cookie;


// Browser BOM
//window object
console.log(window.innerHeight);
screen.height;
location.href;
history.back(); //forward(), go();
navigator.cookieEnabled;
// Alert box, Confirm box, and Prompt box.



// ---------------------------------------------------------------------------------------
// Web worker

var worker_func = () => {
  let w = new Worker("/javascript/worker.js");
  w.onmessage = function(event) {
    document.getElementById("worker").innerHTML = event.data;
  };
}


// ----------------------------------------------------------------------------------------------------
// Loops
// loop for
const loop_eg = [1,2,3,4];
for(let i = 0; i < 4; i++) {
  console.log(i);
}
// loop for in
for(let x in person2) {
  console.log(person2[x]);
}
// loop for of(can't be used for objects)
for(let x of loop_eg) {
  console.log(x);
}

let loop_eg_with = loop_eg.with(2,5);
console.log(loop_eg_with);



// window object example
var globalVar = "q";
(function() {
    var globalVar = "I'm accessible globally!";
})();

console.log(window.globalVar);  // This should work in the browser




//Event listener

document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});


// Classes
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");
myCar.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar.carname;