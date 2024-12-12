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
