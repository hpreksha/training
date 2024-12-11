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
document.getElementById('object2').innerHTML="Hello " + obj.fname;