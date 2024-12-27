// File Contents : Enums in typescript : Enums are used to define a collection of named constants. Enums are defined using the enum keyword.


enum Size {Small=0, Medium='q', Large='q'};
let size_eg : Size = Size.Medium;
console.log(size_eg); // q

// Using object
const Sizes = {
    Small: 0,
    Medium: 'q',
    Large: 'q'
} as const;
type SizeType = typeof Sizes[keyof typeof Sizes];
let sizeObj: SizeType = Sizes.Medium;
console.log(sizeObj); // q

// Using union
type SizeUnion = 0 | 'q';
let sizeUnion: SizeUnion = 'q';
console.log(sizeUnion); // q