"use strict";
let union_eg_obj = {
    id: 1,
    name: "qw",
    func: function () {
        return `id: $(this.id) name: ${this.name}`;
    }
};
console.log(union_eg_obj.func());
