// File Contents : Union in typescript : Union types are used to combine multiple types into one type. Union types are used to define a variable with multiple types.


type union_eg = {
    readonly id: number,
    name: string,
    func : () => string | number
}
let union_eg_obj : Type_alias_eg = {
    id: 1,
    name: "qw",
    func: function() {
        return `id: $(this.id) name: ${this.name}`;
    }

}
console.log(union_eg_obj.func()); // id: 1 name: qw
