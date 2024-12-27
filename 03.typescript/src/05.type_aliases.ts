type Type_alias_eg = {
    readonly id: number,
    name: string,
    func : () => string | number
}

let tae_obj : Type_alias_eg = {
    id: 1,
    name: "qw",
    func: function() {
        return `id: $(this.id) name: ${this.name}`;
    }
}
console.log(tae_obj.func()); // id: 1 name: qw
