"use strict";
var _a, _b, _c;
const user = {
    name: "John",
    address: {
        street: "123 Main St"
    }
};
const street = (_a = user.address) === null || _a === void 0 ? void 0 : _a.street;
console.log(street);
const city = (_c = (_b = user.address) === null || _b === void 0 ? void 0 : _b.city) !== null && _c !== void 0 ? _c : "Unknown City";
console.log(city);
const streetNonNull = user.address.street;
console.log(streetNonNull);
