"use strict";
let tae_obj = {
    id: 1,
    name: "qw",
    func: function () {
        return `id: $(this.id) name: ${this.name}`;
    }
};
console.log(tae_obj.func());
