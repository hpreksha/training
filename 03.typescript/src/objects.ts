const object_eg : {id:number, name?:string} = {
    id:1
}
object_eg.name="q";

let obj_eg = {id:1};
// obj_eg.name = "name"; // error not allowed


let obj_eg2 : {
    readonly id: number,
    name: string,
    func : (x:number, y:number) => number
} = {id:1, name:'', func: (x:number,y:number) => {
    return x+y;
}};
// obj_eg2.id=2; // not allowed
