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
