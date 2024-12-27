"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size["Medium"] = "q";
    Size["Large"] = "q";
})(Size || (Size = {}));
;
let size_eg = Size.Medium;
console.log(size_eg);
const Sizes = {
    Small: 0,
    Medium: 'q',
    Large: 'q'
};
let sizeObj = Sizes.Medium;
console.log(sizeObj);
let sizeUnion = 'q';
console.log(sizeUnion);
