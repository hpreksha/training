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