var obj = {
    fname : "John",
    sname : "Doe",
    ids : {
        eid : 1,
        cid : 2
    },
    fullName : function() {
      return this.fname + " " + this.sname;
    }
}
const arr = Object.values(obj);
document.getElementById('object').innerHTML="Hello " + obj.fullName();
var obj2 = new Object();
obj2.fname = "John";


// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "<br>";
// }

let x="";
const obj3={
  name:"John",
  cars:[
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]}
  ]
}
for (let i in obj3.cars) {
  x+= "<h2>" + obj3.cars[i].name + "</h2>";
  for(let j in obj3.cars[i].models) {
    x+=obj3.cars[i].models[j]+"<br>";
  }
}
document.getElementById('object-eg').innerHTML=x;


const arr2=[1,2,3,4,5];
document.getElementById("arr-eg").innerHTML="Element greater than 4 is " + arr2.find(func) + ".";
function func(value) {
  return value > 4;
}


// ----------------------------------------------------------------------------
// Sets

const s = new Set(["q","w"]);
s.add("e");
s_text="";
for(const x of s) {
  s_text += x;
}
document.getElementById("set_eg").innerHTML = s_text;
console.log(s);

// -------------------------------------------------------------------------------------
// Maps
const mp= new Map([
  ["qw",1],
  ["er", 2]
]);
mp.set("ty",3);
console.log(mp);
document.getElementById("map_eg").innerHTML = mp.get("qw");

const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
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
  console.log("Hello "+some);
}

function display(some) {
  console.log("Answer "+some);
}
function display3(some) {
  console.log("Answer1 "+some);
}
function myCalc(q,w,func,func1,func2) {
  let z=q+w;
  setTimeout(()=>func2(z),1000);
  setTimeout(()=>func(z),2000);
  func1(z);
}

myCalc(2,2,display,display2,display3);

function welcomeUser(username) {
  console.log(`Welcome ${username}`);
}
function getName(callback) {
  let name;
  setTimeout(function() {
    name = 'Jane';
    callback(name);
  }, 500);
}
getName(welcomeUser);


// Promises
let p = new Promise(function(myResolve, myReject) {
  let x = 0;
  if(x==0) {
      myResolve("OK");
  }
  else {
      myReject("Error");
  }
});

p.then(
  function(value) {display(value);},
  function(error) {display(error);}
  );
  
function display(some) {
  console.log(some);
}

// Async await
async function myFunction() {
  return await "hello";
}
myFunction().then(
  function(value) {console.log(value);},
  function(error) {console.log(error);}
);


function upperCase() {
  const x= document.getElementById("name");
  x.value = x.value.toUpperCase();
}